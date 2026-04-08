class MedianFinder {
    constructor() {
        this.nums = [];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        let left = 0;
        let right = this.nums.length;
        while (left < right){
            let mid = Math.floor((left + right) / 2);
            if (this.nums[mid] < num){
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }
        this.nums.splice(left, 0, num);
    }

    /**
     * @return {number}
     */
    findMedian() {
        let n = this.nums.length;
        if (n % 2 === 1){
            return this.nums[Math.floor (n / 2)];
        }
        else {
            let mid1 = n / 2 -1;
            let mid2 = n / 2;
            return (this.nums[mid1] + this.nums[mid2]) / 2.0;
        }
    }
}
