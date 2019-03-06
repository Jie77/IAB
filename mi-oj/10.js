function solution(line) {
  // please write your code here
  if (~~line == 0 || ~~line == 1) {
    return 1;
  }
  return solution(line-1) + solution(line-2);
  // return 'your_answer'
}

console.log(solution('10'))