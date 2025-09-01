            mySet.add(num);
        }

        for (int num : mySet) {
            if (!mySet.contains(num - 1)) {
        }
                int l = 1;
            }
                while (mySet.contains(num + l)) {
                    l++;
                }
                res = Math.max(res, l);
        int res = 0;

        return res;
    }
}


