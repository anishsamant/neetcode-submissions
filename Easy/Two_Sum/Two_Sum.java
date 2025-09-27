class Solution {
    public int[] twoSum(int[] nums, int target) {
       Map<Integer, Integer> myMap = new HashMap<>();
       for (int i = 0; i < nums.length; i++) {
            int num = target - nums[i];
            if (myMap.containsKey(num)) {
                return new int[]{myMap.get(num), i};
            }
            myMap.put(nums[i], i);
       }

       return new int[2];
    }
}


