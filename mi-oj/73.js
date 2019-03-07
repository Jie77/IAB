function solution(line) {
  // please write your code here
  const arr = line.split(',');
  const nums = arr.map(ele => {
    return ~~ele;
  })
  const sum = nums.reduce((a,b) => {
    return a+b
  })
  let arr1 = [];
  nums.forEach(ele => {
    if (arr1.indexOf(ele) === -1) {
      arr1.push(ele)
    }
  })
  const newSum = arr1.reduce((a,b) => {
    return a+b
  })
  return (newSum*3-sum)/2
  // return 'your_answer'
}

console.log(solution('2,3,2,2'))