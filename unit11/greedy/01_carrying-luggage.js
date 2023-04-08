function movingStuff(stuff, limit) {// 아 짐이 최대 2개구나....
    // TODO: 여기에 코드를 작성합니다.
    let luggageDesc = stuff.sort((a,b)=>b-a) // 내림 정렬.. 일단 사용 최대값이 앞, 최소 뒤
    let count = 0, maxidx=0,minidx=stuff.length-1 // 가방 개수

    while(maxidx<=minidx){
        // 2개 넣을 수 있으면 넣고 아니면 무거운 짐만..
        
        let total = stuff[maxidx] + stuff[minidx] 
        if(total <= limit){
            maxidx++
            minidx--
        }else{
            maxidx++
        }
        count++
    }
    return count
}
let output = movingStuff([42, 25, 60, 73, 103, 167], 187);
console.log(output); // 4

let output1 = movingStuff( [60, 73, 80, 87, 103, 109, 119, 123, 128, 129, 136, 146, 153, 168, 182], 200);
console.log(output1); // 11