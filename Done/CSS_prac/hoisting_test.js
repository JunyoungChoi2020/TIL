function solution(arr) {
  var answer = 0;
  for (let i = 0; i <= 9; i++) {
    // includes 사용시 (배열에 지정된 요소가 없으면 false)
    if (!arr.includes(i)) {
      answer += i;
    }

    // indexOf 사용시 (배열에 지정된 요소가 없으면 -1를 반환)
    /*
  if(arr.indexOf(i) === -1) {
 answer += i;
  }
    */
  }

  return answer
}
console.log(solution([1,2,3,4,6,7,8,0])); // 14
console.log(solution([5,8,4,0,6,7,9])); // 6