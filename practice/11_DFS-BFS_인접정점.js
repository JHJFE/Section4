function connectedVertices(edges) { // 여기서 간선의 양방향 간선
    // TODO: 여기에 코드를 작성합니다.
    // 정점
    console.log(edges)
    let arr = edges.reduce((acc, cur) => { // 이렇게 해주면 정점의 리스트를 얻는데 굳이 최대값의 정점을 알아내야하나? 정점이 알파벳인 경우에는? 정점이 0 1 5 7 인 경우에는?
        return [...acc, ...cur]
    })

    let res = [...new Set(arr)] // 정점 중복 제거
    console.log(res)
    //let maxV = Math.max(...arr) // 

    const adjList = {}

    for (let i of res) {
        adjList[i] = [] // 객체의 요소 추가시 변수가 Number type일 경우 []을 통해 해줘야함 .을 사용할 경우 변수의 이름으로 요소가 생성됨(최종적으로 1개에다가 계속 갱신하는 꼴)
    }

    for (let i = 0; i < edges.length; i++) { // 정점의 정보를 모두 가지지 않고도 할 수 있는 풀이 생각해봐야할듯 --> 다음에 ㅋㅋ
        adjList[edges[i][0]].push(edges[i][1]);
        adjList[edges[i][1]].push(edges[i][0]);
    }


    console.log(adjList)

    const visited = {} // 방문한 정점 담기 --> 안해주면 퍼짐
    
    
    let cnt = 0

    for(let node = 0 ;node < res.length ;node++){
        if(!visited[node]){
            cnt++
            bfs(adjList,node,visited)
            //visited[node] = true 
        }
    }
    return cnt
}
function bfs(adjList,node,visited){ // 보고 이해하자
    const queue = [node]
    visited[node] = true;
   // console.log('정점 노드 정보 배열 아닌가?',adjList[node])
    while(queue.length>0){
        const pos = queue.shift() // 현재 탐색 위치
        console.log(pos)
       // console.log('정점 노드 asdf',adjList[pos])
        for(let i = 0 ;i<adjList[pos].length;i++){ // 추정 for of 를 쓸 경우  배열이 value를 조회할 수 가 없음 (For을 쓸경우 i => index 역할로 조회가능)
            
            if(!visited[adjList[pos][i]]){ // 아직 확인 전인 정점인 경우
                queue.push(adjList[pos][i]) // 탐색 대기 걸어 놓기
                visited[adjList[pos][i]]=true
            }
        }
    }
}
const result = connectedVertices([
    [0, 1],
    [2, 3],
    [4, 5],
]);
console.log(result); // 3
const result2 = connectedVertices([
    [0, 1],
    [2, 3],
    [3, 4],
    [3, 5],
]);
console.log(result2); // 2