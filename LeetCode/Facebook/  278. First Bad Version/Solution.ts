/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let lastGood = 0
        let firstBad = n
        while (firstBad - lastGood > 1){
            const bisect = Math.floor((lastGood + firstBad)/2)
            if (isBadVersion(bisect)) {
                firstBad = bisect
            } else {
                lastGood = bisect
            }
        }
        return firstBad

    };
};
