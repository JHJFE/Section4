class BinarySearchTree {
    constructor(value) {
        // constructor로 만든 객체는 이진 탐색 트리의 Node가 됩니다.
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // 이진 탐색 트리의 삽입하는 메서드를 만듭니다.
    insert(value) { //root 10      =>    7   8
        // 입력값을 기준으로, 현재 노드의 값보다 크거나 작은 것에 대한 조건문이 있어야 합니다.
        // 보다 작다면, Node의 왼쪽이 비어 있는지 확인 후 값을 넣습니다.
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BinarySearchTree(value);
            } else {
                // TODO: 비어 있지 않다면 해당 노드로 이동하여 처음부터 다시 크거나 작은 것에 대한 조건을 물어보아야 할 것입니다.
                // TIP: 재귀함수를 사용합니다.
                this.left.insert(value) // ?
            }
            // 보다 크다면, Node의 오른쪽이 비어 있는지 확인 후 값을 넣습니다.
        } else if (value > this.value) {
            if (this.right === null) {
                this.right = new BinarySearchTree(value);
            } else {
                // TODO: 비어 있지 않다면 해당 노드로 이동하여 처음부터 다시 크거나 작은 것에 대한 조건을 물어보아야 할 것입니다.
                // TIP: 재귀함수를 사용합니다.
                this.right.insert(value)
            }
            //그것도 아니라면, 입력값이 트리에 들어 있는 경우입니다.
        } else {
            // 아무것도 하지 않습니다.
        }
    }
    // 앞서 구현했던 트리에 비해 이진 탐색 트리는 입력값과 트리 노드의 값의 크기를 비교하고 있습니다. 왜 그런 것일까요?

    // 이진 탐색 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드를 만듭니다.
    contains(value) {
        // TODO: 값이 포함되어 있다면 true를 반환하세요.
        
        if (this.value === value) {
            console.log('??')
            return true;
        }
        // 입력값을 기준으로 현재 노드의 값보다 작은지 판별하는 조건문이 있어야 합니다.
        if (value < this.value) {
            // TODO: 현재 노드의 왼쪽이 비어 있지 않고, 노드의 값이 입력값과 일치하면 true를 반환합니다.
            if (this.left) {
                console.log('@@')
                if(this.left.value === value){return true}
                this.left.contains(value)
            }
            console.log('@@')
        
            // TODO:일치하지 않다면 왼쪽 노드로 이동하여 다시 탐색합니다. 

        }
        // 입력값을 기준으로 현재 노드의 값보다 큰지 판별하는 조건문이 있어야 합니다.
        if (value > this.value) {
            // TODO: 현재 노드의 오른쪽이 비어 있지 않고, 노드의 값이 입력값과 일치하면 true를 반환합니다.

            // TODO:일치하지 않다면 오른쪽 노드로 이동하여 다시 탐색합니다. 
            // TODO: 현재 노드의 왼쪽이 비어 있지 않고, 노드의 값이 입력값과 일치하면 true를 반환합니다.
            console.log('**')
            if (this.right) {
                if(this.right.value === value){return true}
                this.right.contains(value)
            }
            
        }
        // 없다면 false를 반환합니다.
        return false
    }

    /*
    트리의 순회에 대해 구현을 합니다.
  지금 만드려고 하는 이 순회 메서드는 단지 순회만 하는 것이 아닌, 함수를 매개변수로 받아 콜백 함수에 값을 적용시킨 것을 순회해야 합니다.
  전위 순회를 통해 어떻게 탐색하는지 이해를 한다면 중위와 후위 순회는 쉽게 다가올 것입니다.
    */

    //(value) => arr.push(value * 2)

    // 전위 순회
    preorder(callback) {
        callback(this.value); // arr에 해당 값 push
        if (this.left) { // 왼쪽 노드 있으면
            this.left.preorder(callback) // 왼쪽 노드로 가서 출력하고 다시 탐색?
        };
        if (this.right) {
            this.right.preorder(callback) // 오른쪽도 같은 동작
        };
    }

    // 중위 순회
    inorder(callback) {


        if (this.left) { // 왼쪽 노드 있으면
            this.left.inorder(callback) // 왼쪽 노드로 가서 출력하고 다시 탐색?
        };
        callback(this.value); // arr에 해당 값 push
        if (this.right) {
            this.right.inorder(callback) // 오른쪽도 같은 동작
        };
    }

    //  후위 순회
    postorder(callback) {

        if (this.left) { // 왼쪽 노드 있으면
            this.left.postorder(callback) // 왼쪽 노드로 가서 출력하고 다시 탐색?
        };
    
        if (this.right) {
            this.right.postorder(callback) // 오른쪽도 같은 동작
        };
        callback(this.value); // arr에 해당 값 push
    }

}

const rootNode = new BinarySearchTree(10);
console.log(rootNode)
rootNode.insert(7);
rootNode.insert(8);
rootNode.insert(12);
rootNode.insert(11);
//    10
//  7    12    
//   8 11
console.log(rootNode.left.right.value); // 8
rootNode.right.left.value; //11
console.log(rootNode)
console.log(rootNode.contains(13))
console.log('-----------------------------')
let arr = [];
rootNode.preorder((value) => arr.push(value * 2));
console.log(arr); // [20, 14, 16, 24, 22]

let arr2 = [];
rootNode.preorder((value) => arr2.push(value * 2));
console.log(arr2); // [20, 14, 16, 24, 22]