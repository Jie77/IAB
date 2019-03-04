function solution(line) {
  // please write your code here
  const nums = line.split(' ')
  const num1 = nums[0]
  const num2 = nums[1]
  return ~~num1 + ~~num2
  // return 'your_answer'
}

console.log(solution("233 666"))