export interface User {
  id: number;
  name: string;
  activatedOn: Date;
  deactivatedOn: Date | null;
  customerId: number;
}

export interface Subscription {
  id: number;
  customerId: number;
  monthlyPriceInCents: number;
}

/**
 * Computes the monthly charge for a given subscription.
 *
 * @returns The total monthly bill for the customer in cents, rounded
 * to the nearest cent. For example, a bill of $20.00 should return 2000.
 * If there are no active users or the subscription is null, returns 0.
 *
 * @param month - Always present
 *   Has the following structure:
 *   "2022-04"  // April 2022 in YYYY-MM format
 *
 * @param subscription - May be null
 *   If present, has the following structure (see Subscription interface):
 *   {
 *     'id': 763,
 *     'customerId': 328,
 *     'monthlyPriceInCents': 359  // price per active user per month
 *   }
 *
 * @param users - May be empty, but not null
 *   Has the following structure (see User interface):
 *   [
 *     {
 *       id: 1,
 *       name: "Employee #1",
 *       customerId: 1,
 *   
 *       // when this user started
 *       activatedOn: new Date("2021-11-04"),
 *   
 *       // last day to bill for user
 *       // should bill up to and including this date
 *       // since user had some access on this date
 *       deactivatedOn: new Date("2022-04-10")
 *     },
 *     {
 *       id: 2,
 *       name: "Employee #2",
 *       customerId: 1,
 *   
 *       // when this user started
 *       activatedOn: new Date("2021-12-04"),
 *   
 *       // hasn't been deactivated yet
 *       deactivatedOn: null
 *     },
 *   ]
 */
export function monthlyCharge(yearMonth: string, subscription: Subscription | null, users: User[]): number {
  // If no subscription or empty users return $0, 
  // might be better to throw an exception depending on intended behavior
  if (!subscription || users.length == 0) return 0
  
  const firstOfMonth = firstDayOfMonth(new Date(yearMonth))
  const customerId = subscription.customerId
  const monthlyRate = subscription.monthlyPriceInCents
  const daysInMonth = lastDayOfMonth(firstOfMonth).getDate()
  const dailyRate = monthlyRate / daysInMonth
  
  // Filter list to only users active within the month
  const customerUsersInMonth = users.filter((user) => {
    return user.customerId == customerId
      && activeWithinMonth(firstOfMonth, user.activatedOn, user.deactivatedOn)
  })
  
  // Sum up the costs for the users within the month
  const total = users.reduce((total, user)=>{
    // Protect against including non-customer users 
    if (user.customerId != customerId) return total
    
    // Skip users not active in the month
    if (!activeWithinMonth(firstOfMonth, user.activatedOn, user.deactivatedOn)) return total
    
    // First day = first of the month or when activated
    let firstDayActive = Math.max(
      user.activatedOn.getDate(), 
      firstDayOfMonth(firstOfMonth).getDate()
    )
    
    // Last day = last of month or when deactivated
    let lastDayActive = !user.deactivatedOn ? lastDayOfMonth(firstOfMonth).getDate()
      : Math.min(user.deactivatedOn.getDate(), lastDayOfMonth(firstOfMonth).getDate())
    
    return total += (lastDayActive - firstDayActive + 1) * dailyRate
  }, 0)
  return total
}

/*******************
* Helper functions *
*******************/

/**
  Takes a Date instance and returns a Date which is the first day
  of that month. For example:

  firstDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 1)

  Input type: Date
  Output type: Date
**/
function firstDayOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

/**
  Takes a Date object and returns a Date which is the last day
  of that month. For example:

  lastDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 31)

  Input type: Date
  Output type: Date
**/
function lastDayOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

/**
  Takes a Date object and returns a Date which is the next day.
  For example:

  nextDay(new Date(2022, 3, 17)) // => new Date(2022, 3, 18)
  nextDay(new Date(2022, 3, 31)) // => new Date(2022, 4, 1)

  Input type: Date
  Output type: Date
**/
function nextDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}

/**
  Convenience function to check if a user was active for any day within a given month
**/
function activeWithinMonth(month: Date, startDate: Date, endDate: Date | null) {
  return startDate <= lastDayOfMonth(month) && (!endDate || endDate >= firstDayOfMonth(month))
}
