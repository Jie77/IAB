function solution(line) {
  // please write your code here
  const arr = line.split(',');
  const nums = arr.map(ele => {
    return ~~ele;
  })
  let a = []
  for (let i=0; i<nums.length; i++) {
    if(nums[i] < 0) {
      continue;
    }
    if(nums.indexOf(nums[i]+1) === -1) {
      a.push(nums[i] + 1);
    }
  }
  // return 'your_answer'
  if (a.length === 0) {
    return 1;
  }
  const res = Math.min(...a);
  return res > 0 ? res : 1;
}

console.log(solution('-1,-10,0'));