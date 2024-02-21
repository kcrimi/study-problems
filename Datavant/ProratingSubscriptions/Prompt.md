Prorating Subscriptions
Background
Our company has started selling to larger customers, so we are creating subscription tiers with different feature sets to cater to our customers’ unique needs. We previously charged every customer a flat fee per month, but now we plan on charging for the number of users active on the customer's subscription plan. As a result, we're changing our billing system.

Instructions
You’ve picked up the work item to implement the logic to compute the monthly charge:

Prorating Subscriptions (#8675309)
We'd like you to implement a monthlyCharge function to calculate the total monthly bill for a customer.

Customers are billed based on their subscription tier. We charge them a prorated amount for the portion of the month each user’s subscription was active. For example, if a user was activated or deactivated part way through the month, then we charge them only for the days their subscription was active.

We want to bill customers for all days users were active in the month (including any activation and deactivation dates, since the user had some access on those days).

Notes
Here’s an idea of how we might go about this:

Calculate a daily rate for the subscription tier
For each day of the month, identify which users had an active subscription on that day
Multiply the number of active users for the day by the daily rate to calculate the total for the day
Return the running total for the month at the end
Testing
For some examples showing the calculation in action, see the provided unit tests. The provided tests only cover a few cases, so you should plan to add your own tests to ensure that your solution handles any edge cases. You should be able to follow the existing patterns for naming and constructing tests to add your own.

Notes
It’s more important for the return value to be correct than it is for the algorithm to be highly optimized.
You can store intermediate results as any kind of decimal type (e.g. float, double). You do not need to round values until the last step.
You should not change function names or return types of the provided functions since our test cases depend on those not changing.
