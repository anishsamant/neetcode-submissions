class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length - 1;
        let maxWater = 0;
        while (l < r) {
            let water =  (r - l) * Math.min(heights[l], heights[r]);
            maxWater = Math.max(maxWater, water);
            if (heights[l] <= heights[r]) l++;
            else r--;
        }

        return maxWater;
    }
}


