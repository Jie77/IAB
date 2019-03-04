function solution(line) {
  // please write your code here
  const nums = line.split('-');
  const a = nums[0].split('');
  const b = nums[1].split('');
  let c = 0;
  let res = [];
  let temp = null;
  while(a.length != 0 || b.length!=0 || c>0) {
    temp = ~~a.pop() - c - ~~b.pop();
    c = temp < 0 ? 1 : 0;
    if (c> 0) {
      temp = temp + 10;
    }
    res.push(temp);
  }
  return res.reverse().join('');

  // return 'your_answer'
}

console.log(solution('1231231237812739878951331231231237812739878951331231231237812739878951331230000000000000000000000001-331231231237812739878951331231231'))
