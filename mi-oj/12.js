function getSum(arr, num) {
  let sum = 0;
  for (let i=0; i<arr.length; i++) {
    if(num - arr[i] < 0) {
      break;
    }
    if(num - arr[i] === 0) {
      sum++;
    }
    if(num - arr[i] > 0) {
      sum += getSum(arr, num - arr[i])
    }
  }
  return sum;
}

function solution(line) {
  // please write your code here
  const Input = line.split(' ');
  const arr = Input[0].split(',');
  const nums = arr.map(ele => {
    return ~~ele;
  })
  
  return getSum(nums, ~~Input[1])
  // return 'your_answer'
}

console.log(solution('1,2,3 4'))
