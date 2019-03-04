function solution(line) {
  // please write your code here
  const nums = line.split(' ')
  const res =  nums.filter(x => {
    return nums.indexOf(x) == nums.lastIndexOf(x)
  })
  return res[0]
  // return 'your_answer'
}

console.log(solution('10 10 11 12 12 11 16'))