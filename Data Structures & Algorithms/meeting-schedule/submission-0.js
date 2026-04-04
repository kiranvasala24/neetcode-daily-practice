/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if (intervals.length <= 1){
            return true;
        }
        intervals.sort((a,b) => a.start - b.start);

        for (let i = 1; i < intervals.length; i++){
            let prev = intervals[i - 1];
            let curr = intervals[i];

            if (prev.end > curr.start){
            return false;
            }
        }
        
        return true;
    }
}
