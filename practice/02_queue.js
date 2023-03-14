class Queue {
    constructor() {
      this.storage = {}; 
      this.front = 0;
      this.rear = 0; // 뒤
    }
  
    size() {
      return this.rear - this.front // 추가된 요소 개수 - 빠진 요소 개수
    }
      
      // 큐에 데이터를 추가 할 수 있어야 합니다.
    enqueue(element) { 
      this.storage[this.rear] = element; // rear자리에 값이 없는 상태에서 값 추가 다음 rear를 위한 1증가
      this.rear += 1; // {0:1, 1:2 }이었던 배열에 2:4추가해주고 rear를 3으로 만듬 --> rear가 길이 아닌가 --> 아님.. 앞에서 out하니까
    }
      
      // 가장 먼저 추가된 데이터가 가장 먼저 추출되어야 합니다.
    dequeue() {
      // 빈 큐에 dequeue 연산을 적용해도 에러가 발생하지 않아야 합니다
      if (this.front === this.rear) { // 요소 다 출력됐으면 동작 x
        return;
      }
      // 뺀거 보여주고 앞을 가르치는 요소 땡기기
      const result = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
      
  
      return result;
    }
  }
const queue = new Queue();

queue.size(); // 0
for (let i = 1; i < 10; i++) {
    queue.enqueue(i);
}
queue.dequeue(); // 1
queue.dequeue(); // 2
queue.size(); // 7

console.log(queue)
console.log(queue.size())
queue.enqueue(10);
queue.size(); // 8
queue.dequeue(); // 3
queue.dequeue(); // 4
queue.size(); // 6

