var findMin = function(nums) {

  if(nums.length === 1) {
    return nums[0]
  }

  let left = 0, right = nums.length - 1;

  if(nums[right] > nums[0]) {
    return nums[0]
  }

  while(left < right) {

    let mid = Math.floor(left + (right - left) / 2);

    if(nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    if(nums[mid-1] > nums[mid]) {
      return nums[mid];
    }
    
    if(nums[mid] > nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
const nums = [4,5,6,7,1,2];
console.log(findMin(nums));