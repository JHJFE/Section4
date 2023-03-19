// directed graph (방향 그래프)
// unweighted (비가중치)
// adjacency matrix (인접 행렬)
// 이해를 돕기 위해 기존 배열의 인덱스를 정점으로 사용합니다 (0, 1, 2, ... --> 정점)

class GraphWithAdjacencyMatrix {
    constructor() {
        this.matrix = [];
    }

    addVertex() { // 
        //버텍스를 추가합니다.
        const currentLength = this.matrix.length;
        for (let i = 0; i < currentLength; i++) {
            this.matrix[i].push(0);
        }
        console.log(this.matrix)
        this.matrix.push(new Array(currentLength + 1).fill(0)); // 새로운 연을 만들고 0 채우고 push
    }

    contains(vertex) { // 인덱스가 vertex의 역할을 함--> 언디만 아니면?
        //TODO: 버텍스가 있는지 확인합니다.
        return this.matrix[vertex] !== undefined
    }

    addEdge(from, to) { // 단방향 간선인듯 0,1  0,2
        const currentLength = this.matrix.length;
        if (from === undefined || to === undefined) {
            console.log("2개의 인자가 있어야 합니다.");
            return;
        }
        //TODO: 간선을 추가할 수 없는 상황에서는 추가하지 말아야 합니다.
        if (from + 1 > currentLength || to + 1 > currentLength || from < 0 || to < 0) {
            console.log("범위가 매트릭스 밖에 있습니다.");
            return;
        }
        //TODO: 간선을 추가해야 합니다.
        this.matrix[from][to] = 1
    }

    hasEdge(from, to) {
        //TODO: 두 버텍스 사이에 간선이 있는지 확인합니다.
        return this.matrix[from][to] === 1
    }

    removeEdge(from, to) {
        const currentLength = this.matrix.length;
        if (from === undefined || to === undefined) {
            console.log("2개의 인자가 있어야 합니다.");
            return;
        }
        //TODO: 간선을 지울 수 없는 상황에서는 지우지 말아야 합니다.
        if (from + 1 > currentLength || to + 1 > currentLength || from < 0 || to < 0) {
            return
        }
        this.matrix[from][to]=0
        //TODO: 간선을 지워야 합니다.
    }
}
const adjMatrix = new GraphWithAdjacencyMatrix();
adjMatrix.addVertex();
adjMatrix.addVertex();
adjMatrix.addVertex();
adjMatrix.addVertex();
console.log(adjMatrix.matrix);

/*
    TO
                     0  1  2
                0	[0, 0, 0],
    FROM 	1	[0, 0, 0],
                2	[0, 0, 0]
//
*/

let zeroExists = adjMatrix.contains(0);
console.log(zeroExists); // true

let oneExists = adjMatrix.contains(1);
console.log(oneExists); // true

let twoExists = adjMatrix.contains(2);
console.log(twoExists); // true

adjMatrix.addEdge(0, 1);
adjMatrix.addEdge(0, 2);
adjMatrix.addEdge(1, 2);
console.log('구분선-----------------------------')
let zeroToOneEdgeExists = adjMatrix.hasEdge(0, 1);
console.log(zeroToOneEdgeExists); // true
let zeroToTwoEdgeExists = adjMatrix.hasEdge(0, 2);
console.log(zeroToTwoEdgeExists); // true
let oneToZeroEdgeExists = adjMatrix.hasEdge(1, 0);
console.log(oneToZeroEdgeExists); // false

console.log(adjMatrix.matrix);

// /*
// 							TO
// 		 	  	 0  1  2
// 		  	0	[0, 1, 1],
// 	FROM 	1	[0, 0, 1],
// 		  	2	[0, 0, 0]
// */

adjMatrix.removeEdge(1, 2);
adjMatrix.removeEdge(0, 2);
let oneToTwoEdgeExists = adjMatrix.hasEdge(1, 2);
console.log(oneToTwoEdgeExists); // false
zeroToTwoEdgeExists = adjMatrix.hasEdge(0, 2);
console.log(zeroToTwoEdgeExists); // false

console.log(adjMatrix.matrix);
// /*
// 							TO
// 		 	  	 0  1  2
// 		  	0	[0, 1, 0],
// 	FROM 	1	[0, 0, 0],
// 		  	2	[0, 0, 0]
// */
