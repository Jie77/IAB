function solution(line) {
  // please write your code here
  const arr = line.split(' ');
  const str1 = arr[0].split('');
  const nums = str1.map(ele => {
    return ~~ele;
  })
  const n = ~~arr[1];
  let del = 0, res = [], i = 0;
  while(i<nums.length-1) {
    if(nums[i] > nums[i+1] && del < n) {
      del++;
      nums.splice(i,1);
      i = 0;
    }else {
      i++;
    }
  }
  if(n > del){
    for(let i=0; i<n-del; i++) {
      nums.pop();
    }
  }
  return ~~nums.join('');
  // return 'your_answer'
}

console.log(solution('12340 4'))
console.log(solution('123402 4'))
console.log(solution('12616 3'))
console.log(solution('1266 3'))