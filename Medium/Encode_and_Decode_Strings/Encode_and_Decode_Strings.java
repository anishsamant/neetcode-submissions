class Solution {

    public String encode(List<String> strs) {
        String encoded = "";
        for (String s : strs) {
            encoded += s.length() + "#" + s;
        }

        return encoded;
    }

    public List<String> decode(String str) {
        int i = 0;  
        List<String> ans = new ArrayList<>();  
        while (i < str.length()) {
            int j = i;
            while (str.charAt(j) != '#') {
                j++;
            }
            int l = Integer.parseInt(str.substring(i, j));
            j++;
            int endIndex = j + l;
            String word = str.substring(j, endIndex);
            ans.add(word);
            i = endIndex;
        }
        return ans;
    }
}


