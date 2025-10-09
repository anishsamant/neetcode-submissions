class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;
        while (l < r) {
            let m = l + Math.floor((r - l) / 2);
            if (nums[m] < nums[r]) r = m;
            else l = m + 1;
        }

        let pivot = l;
        l = 0;
        r = nums.length - 1;

        if (target == nums[pivot]) return pivot;

        if (target > nums[r]) r = pivot - 1;
        else l = pivot;

        while (l <= r) {
            let m = l + Math.floor((r - l) / 2);
            if (nums[m] == target) return m;
            if (target > nums[m]) l = m + 1;
            else r = m - 1;
        }

        return -1;
    }
}


