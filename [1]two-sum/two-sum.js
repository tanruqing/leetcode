/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (45.42%)
 * Total Accepted:    309.2K
 * Total Submissions: 678.9K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 思路：遍历数组，将num[i]放进hashmap，如果target - num[i]在hashmap中，返回索引值
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var obj = {};
    obj[nums[0]] = 0;
    for (var i = 1; i < nums.length; i++) {
      if (obj.hasOwnProperty(target - nums[i])) {
        return [obj[target - nums[i]], i];
      } else {
        obj[nums[i]] = i;
      }
    }
  };
  
  