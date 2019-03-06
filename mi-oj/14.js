function solution(line) {
  // please write your code here
  const arr = line.split(' ');
  const nums = arr[0].split(',');
  return nums.indexOf(arr[1]);
  // return 'your_answer'
}

console.log(solution('4,5,6,7,0,1,2 6'))