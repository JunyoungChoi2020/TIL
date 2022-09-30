
// 1번문제: 없는 정수 사이의 합 (하)
function solution(arr1){
    let answer = 0;
    // 비어있는 숫자를 찾아 empty_num array에 저장합니다.
    let empty_num = []
    for(let i=0; i<10; i++){
        if(!arr1.includes(i)){empty_num.push(i)} // 빠진 숫자 6, 7을 발견하면 empty_num array에 push합니다을
    }
    // 두 비어있는 숫자 사이의 모든 자연수를 더한 값을 등차수열의 합 공식을 이용해 구한 후 반환합니다.
    answer = (empty_num[0] + empty_num[1]) * ((Math.abs(empty_num[0] - empty_num[1])+1)/2)
    return answer;
}

let arr1=[1, 3, 5, 9, 2, 4, 8, 0]
console.log(solution(arr1))


// 2번 문제: 이상한 문자 만들기2 (중)
function solution(s) {
    var answer = '';
    // 문자열 s를 공백문자를 기준으로 나눕니다.
    let splited = s.split(' ')
    // Boolean 변수 counter를 정의합니다. 변수 counter는 각 char의 대문자, 소문자 식별자 기능을 수행합니다.
    let counter = false
    // 띄어쓰기를 기준으로 나뉜 작은 문자열들을 하나씩 받아옵니다.
    for(let word of splited){
        for(let i=0; i<word.length; i++){
            // counter가 false이면 대문자를, true이면 소문자를 answer 문자열에 더해줄 것 입니다.
            // 변수 counter는 한 번 기능을 수행했다면 true -> false, false -> true로 변합니다.
            if((counter) == false){
                answer += (word[i].toUpperCase());
                counter = true
            } else {
                answer += word[i].toLowerCase();
                counter = false
            }
        }
        answer += ' '
    }
    //변환된 문자열을 반환합니다.
    answer = answer.slice(0, -1)
    return answer;
}

let s = "hang hae ninety nine";
console.log(solution(s))


// 3번 문제
function solution(arr, n) {
    var answer = [];
    // 변수 values는 argument Array arr의 값을 map 형식으로 저장할 것입니다. 
    // 변수 values의 key는 각 단어가, values에는 각 단어의 n번째 char가 저장될 것입니다.
    let values = new Map()
    let dups_key_list = []
    arr.map((string) =>{
        // 만약 arr의 각 단어 중 하나가 이미 values의 key list에 존재하고, 리스트 dubs_key_list에 존재하지 않는다면, value에 set하지 않고, 단지 리스트에 단어를 저장합니다.
        if(values.has(string) && !dups_key_list.includes(string)){
            dups_key_list.push(string)
        } else {
            values.set(string, string[n])
        }
    })

    // 중복된 단어를 map에서 제거합니다.
    dups_key_list.map((v) => values.delete(v))

    // n번째 char를 기준으로 values에 저장된 각 단어를 sort합니다.
    let temp = [...values].sort((a, b)=>{
        let val = a[1].localeCompare(b[1])
        if(val !== 0){
            return val

        //만약 n번째 char가 동일하다면, 사전순으로 나열합니다.
        } else {
            return a[0].localeCompare(b[0])
        }
    })
    
    // sort된 값을 반환합니다.
    answer = temp.map((string) => string[0])
    return answer;
}

let arr = ["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
let n = 2;
console.log(solution(arr, n));
