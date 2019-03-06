function solution(line) {
  // please write your code here
  const arr = line.split(' ');
  const arr1 = arr[0].split('');
  const arr2 = arr[1].split('');
  let t = null;
  for(let i=0; i<arr1.length; i++) {
    t = arr2.indexOf(arr1[i])
    if (t != -1) {
      arr2.splice(t, 1);
    } else {
      return 'false'
    }
  }
  return 'true'
  // return 'your_answer'
}

console.log(solution('a b'))