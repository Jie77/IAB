function solution(line) {
  // please write your code here
  let str = line;
  let t = str.indexOf('mi');
  while(t!=-1) {
    str = str.slice(0,t) + str.slice(t+2)
    t = str.indexOf('mi');
  }
  return str;
  // return 'your_answer'
}

console.log(solution('samsungmimiapple'));