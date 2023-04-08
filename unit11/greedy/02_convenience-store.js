function partTimeJob(k) {
    // TODO: 여기에 코드를 작성하세요.
    // 1원, 5원, 10원, 50원, 100원, 500원
    let count = 0
    let coin = [500,100,50,10,5,1]
    let remain = k

    for(let i =0;i<coin.length;i++){
        count += Math.floor(remain/coin[i])
        remain %= coin[i]
    }
    return count
}

// 4000원을 받았을 때 500원짜리 동전 8개를 반환합니다.
const output1 = partTimeJob(4000);
console.log(output1); // --> 8

// 4972원을 받았을 때 500원짜리 동전 9개, 100원짜리 동전 4개, 50원짜리 동전 1개, 10원짜리 동전 2개, 1원짜리 동전 2개, 총 18개를 반환합니다.
const output2 = partTimeJob(4972);
console.log(output2); // --> 18