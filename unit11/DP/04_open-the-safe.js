function ocean(target, type) {
    // bag 이라는 배열에 금액을 만들 수 있는 경우의 수를 기록
    // 각 인덱스 no# = 만드려는 금액 을 의미
    // ex) target = 5, type = [1, 2, 5] 면
    // bag[3] = 2  => 3원을 만드는 경우의 수 = 1만 사용 & 1,2 함께 사용 (1*3, 1 + 2)
    // bag[4] = 3  => 4원을 만드는 경우의 수 = 1만 사용 & 1,2 함께 사용 (1*4, 1*2 + 2, 2*2)
    // bag[5] = 4  => 5원을 만드는 경우의 수 = 1만 사용 & 1,2 함께 사용 & 1, 2, 5 함께 사용 (1*5 , 1*3 + 2, 1 + 2*2, 5*1)
    // 0 을 만들 수 있는 경우는 아무것도 선택하지 않으면 되기 때문에 bag[0] = 1 로 초기값 설정
    let bag = [1];
  
 
    for(let i = 1; i <= target; i++) //
      bag.push(0);

    for(let i = 0; i < type.length; i++) {
    
      for(let j = 1; j <= target; j++)
  
        if(type[i] <= j)
 
          bag[j] += bag[j-type[i]];
    }

    return bag[target];
  }
let output = ocean(50, [10, 20, 50]);
console.log(output); // 4

let output1 = ocean(100, [10, 20, 50]);
console.log(output1); // 10

let output2 = ocean(30, [5, 6, 7]);
console.log(output2); // 4