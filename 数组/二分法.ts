// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

const nums = [1, 2, 3];
const target = 9999;

//js
function fn(nums: Array<number>, target: any): number {
  const ind = nums.findIndex((item) => item === target);
  return ind;
}

// console.log("-----", fn(nums, target));

// 二分法
// [a,b]
function search(nums: number[], target: number) {
  let mid: number,
    left: number = 0,
    right: number = nums.length - 1;
  while (left <= right) {
    mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

// console.log("---打印", search(nums, target));

// [a,b)
function search2(nums: number[], target: number) {
  let mid: number,
    left: number = 0,
    right: number = nums.length;
  while (left < right) {
    mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}
