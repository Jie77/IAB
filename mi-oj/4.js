function solution(line) {
  // please write your code here
  const Input = line.split(',');
  nums = Input.map(ele => {
    return ~~ele;
  });
  const maxNum = Math.max(...nums);
  const arr = new Array(maxNum+1);
  arr.fill(0);
  nums.forEach(ele => {
    arr[ele] = 1;
  })
  let maxLen = 1;
  let tempMaxLen = 1;
  for(let i=0; i<arr.length-1; i++) {
    if (arr[i] === 1 && arr[i+1] === 1) {
      tempMaxLen++;
    } else {
      maxLen = maxLen > tempMaxLen ? maxLen : tempMaxLen;
      tempMaxLen = 1;
    }
  }
  maxLen = maxLen > tempMaxLen ? maxLen : tempMaxLen;
  return maxLen;
  // return 'your_answer'
}

console.log(solution('1'))