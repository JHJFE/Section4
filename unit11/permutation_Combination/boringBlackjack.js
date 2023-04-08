function boringBlackjack(cards) {// 조합
    // TODO: 여기에 코드를 작성합니다.
    // 숫자로 이루어진 카드를 여러 장 받습니다.
    // 3장씩 카드를 고르고, 3장에 적힌 숫자들의 합이 소수인지 확인합니다.
    // 받아든 카드로 만들 수 있는 소수의 개수가 많은 사람이 이기게 됩니다.
    // 소수 개수
    let result = 0;
    for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
          for (let k = j + 1; k < cards.length; k++) {
            primecheck(cards[i]+cards[j]+cards[k]) ? result++ :null
          }
        }
      }

    function primecheck(num) {
        if(num===2)return true
        for(let i  = 2;i<=Math.floor(Math.sqrt(num));i++){ // 모든 수는 0,1로 나누어 지니까 2부터 
            if(num%i ===0)return false
        }
        return true
    }
    return result
}

let output = boringBlackjack([1, 2, 3, 4]);
console.log(output); // 1

let output1 = boringBlackjack([2, 3, 4, 8, 13]);
console.log(output1); // 3