const twoSum = function(nums, target) {
    const valsMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
      
        if (valsMap.get(complement) !== undefined) {
          return ([valsMap.get(complement), i])
        } else {
          valsMap.set(nums[i], i)
        }
    }
    
};

twoSum([3,2,9], 12)

