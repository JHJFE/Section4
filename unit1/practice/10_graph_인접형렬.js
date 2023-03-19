function getDirections(matrix, from, to) {
    // TODO: 여기에 코드를 작성합니다.
    // from 인덱스의 배열에서 1이 있는지 탐색?
    // 있으면 요소의 기준으로 배열에서 1이 있는지 
    // 없으면 False
    // 있으면 해당 요소에서 배열에서 1이 있는지
    // 없으면 false
    // --> 요소가 to 인지?

    
    if (matrix[from][to] === 1) {
        return true
    } 
    
    let queue = [from]

    let isVisited = new Array(matrix.length).fill(false) // 어처피 이미 연결된 애들이니까 행의 길이만큼만 필요한듯

    while(queue.length >0){
        let pos = queue.shift()// 현재 위치
        if(pos === to) return true // 도착했을때
        // 방문했던 노드는 다시 방문 x , 불린을 넣은 배열로 구분
        for(let i=0 ; i<matrix[pos].length ;i++){
            if(matrix[pos][i] === 1 && !isVisited[i]){ // 방문한적 없고 행선지 있을때 -> 방문 여부 체크 안하면 무한 사이클 
                queue.push(i)
                isVisited[i] = true
            }
        }

    }
    return false
}
const result = getDirections(
    [
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
        [0, 1, 0, 0],
    ],
    0,
    2
);
console.log(result); // true
// 정점 0에서 2로 가는 길이 존재하는지 확인합니다.
// 0 --> 1 로 가는 간선이 존재하고, 1 --> 2 로 가는 간선이 존재하기 때문에 true를 반환합니다.

const result2 = getDirections(
    [
        [0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [1, 1, 1, 1, 0],
    ],
    1,
    4
);
console.log(result2); // false