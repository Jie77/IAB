function solution(line) {
  // please write your code here
  let num = ~~line;
  let sum = 0;
  let t = 0;
  while(Math.floor(num/10)) {
    t = num;
    while(t) {
      sum += (t%10) * (t%10);
      t = Math.floor(t/10)
    }
    num = sum;
    sum=0;
  }
  const res = num === 1 ? 'true' : 'false';
  return res;
  // return 'your_answer'
}

console.log(solution('1'));