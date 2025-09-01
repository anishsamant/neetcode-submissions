class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> mySet = new HashSet<>();
        for (int num : nums) {
            mySet.add(num);
        }

        int res = 0;
        for (int num : mySet) {
            if (!mySet.contains(num - 1)) {
                int l = 1;
                while (mySet.contains(num + l)) {
                    l++;
                }
                res = Math.max(res, l);
            }
        }

        return res;
    }
}


