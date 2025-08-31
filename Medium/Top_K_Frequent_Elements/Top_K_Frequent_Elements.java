class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> myMap = new HashMap<>();
        List<List<Integer>> freq = new ArrayList<>(nums.length + 1);

        for (int i = 0; i < nums.length + 1; i++) {
            freq.add(new ArrayList<>());
        }

        for (int num : nums) {
            myMap.put(num, myMap.getOrDefault(num, 0) + 1);
        }

        for (Map.Entry<Integer, Integer> entry : myMap.entrySet()) {
            freq.get(entry.getValue()).add(entry.getKey());
        }

        int[] res = new int[k];
        int count = 0;
        for (int i = freq.size() - 1; i > 0 && count < k; i--) {
            for (int val : freq.get(i)) {
                res[count++] = val;
                if (count == k) {
                    return res;
                }
            }
        }

        return res;
    }
}


