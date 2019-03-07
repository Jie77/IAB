function solution(line) {
  // please write your code here
  const Input = line.split(',');
  const nums = Input.map(ele => {
    return ~~ele;
  })
  let arr = [];
  let res = 0;
  for(let i=0; i<nums.length-1; i++) {
    arr.push(10-nums[i]);
    arr.push(nums[i]-10);
    arr.push(10+nums[i]);
    for(let j=i+1; j<nums.length; j++) {
      if(arr.indexOf(nums[j]) != -1) {
        res++;
      }
    }
    arr = [];
  }
  
  return res;
  // return 'your_answer'
}


console.log(solution('5,5,5,5'))