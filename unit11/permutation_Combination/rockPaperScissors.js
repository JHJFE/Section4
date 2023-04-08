function rockPaperScissors(num) { // 순열
    // TODO: 여기에 코드를 작성합니다.
    // 공부해보는 것 중요!! 페어분이랑 얘기해보자
    let noc = ['rock', 'paper', 'scissors'], result = [];

    function refunc(rounds,acc = []) {
        // 재귀 탈출문
        if (rounds === 0) {
            result.push(acc)
            return
        }
        for (let i = 0; i < noc.length; i++) {
            let pos = noc[i]

            refunc(rounds -1, acc.concat(pos))
        }
        // 재귀 반복문
        // 재귀 조건문
    }
    refunc(num)
    return result
};
let output = rockPaperScissors(3);

console.log(output);
/*
    [
      ["rock", "rock", "rock"],
      ["rock", "rock", "paper"],
      ["rock", "rock", "scissors"],
      ["rock", "paper", "rock"],
      // ...etc ...
    ]
  */