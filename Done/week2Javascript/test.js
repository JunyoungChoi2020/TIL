let s = "one4seventwoeight";
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let answer = s;
    for(let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        console.log(arr)
        answer = arr.join(i);
    }
    return Number(answer);
}
(solution(s));