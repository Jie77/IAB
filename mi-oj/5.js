function solution(line) {
  // please write your code here
  const nums = line.split(',');
  const targetIndex = Math.floor(nums.length/2);
  const minNumIndex = nums.indexOf(Math.min(...nums).toString());
  const maxNumIndex = nums.indexOf(Math.max(...nums).toString());
  const temp = nums[0] > nums[nums.length-1] ? minNumIndex : maxNumIndex;

  if (temp === nums.length - 1) {
    return nums[targetIndex];
  }
  
  return nums[(targetIndex + temp) % nums.length];

  // return 'your_answer'
}

console.log(solution('1'))