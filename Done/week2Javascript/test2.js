function solution(s){
    let answer = "";
    // 소수는 PrimeNumber 리스트에, 소수가 아닌 수는 notPrimeNumber 리스트에 넣을 것입니다.
    let notPrimeNumber = []
    let PrimeNumber = []

    // 리스트 내부의 값을 하나씩 가져옵니다.
    s.map((n) => {
        // 만약 값이 공백이 아닌 숫자라면, 소수 검색 알고리즘을 수행합니다.
        if(!isNaN(n)){
            // 소수 탐색 알고리즘은 다음과 같습니다.
            // 소수는 자기 자신과 1 외의 약수를 가지지 아니하므로, 비교를 위하여 수 2부터 받은 값의 루트값 사이에 위치하는 자연수로 나누어 봅니다.
            // 만약 소수라면 나머지가 0인 경우가 없을 것입니다. 
            let loof_number = Math.sqrt(n)
            for(let i=2; i<=loof_number; i++){
                // 만약 i로 나누었을 때 0의 나머지가 도출된다면, 소수가 아니므로 notPrimeNumber에 넣습니다.
                if(n % i === 0){
                    notPrimeNumber.push(n)
                    break
                }
                // 모든 i로 나뉘어지지 않는 경우 소수이므로, PrimeNumber에 넣습니다.
                if(i >= loof_number-1 && i<= loof_number){
                    PrimeNumber.push(n)
                }
            }
        }
    })

    // 두 리스트를 오름차순으로 정렬합니다.
    notPrimeNumber = notPrimeNumber.sort((a, b) => {return a - b})
    PrimeNumber = PrimeNumber.sort((a, b) => {return a - b})
    console.log(notPrimeNumber)
    console.log(PrimeNumber)
    // 가장 작은 소수가 아닌 수와, 가장 큰 소수인 수를 반환합니다.
    answer = PrimeNumber[PrimeNumber.length-1] + " " + notPrimeNumber[0]
    return answer;
}

let s = [97, 75, 88, 99, 95, 92, 73, 49];

console.log(solution(s))