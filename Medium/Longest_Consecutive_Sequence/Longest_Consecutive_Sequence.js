        for (let i = 1; i < nums.length; i++) {
            if (nums[i] - nums[i - 1] == 1) {
        }

                count++;
            } else if (nums[i] == nums[i - 1]) {
        if (count > max) {
            max = count;
                continue;
            } else {
                if (count > max) {
            }
                    max = count;
                }
        }

                count = 1;
        let max = 1;
        let count = 1;

