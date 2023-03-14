class Stack {
    constructor() {
      this.storage = {};
      this.top = -1; // 스택의 가장 상단을 가리키는 포인터 변수를 초기화 합니다.
    }
  
    size() {
      return this.top+1; // 최상단 Index +1 = 길이
    }
  
      // 스택에 데이터를 추가 할 수 있어야 합니다.
    push(element) {
      this.top += 1;
      this.storage[this.top] = element; // 객체의 형태로 최상단에 요소 추가
      // storage[this.top] = element 뜻 storage객체 안에 key : {top}이고 value : {element}이 요소 추가
    }
      
      // 가장 나중에 추가된 데이터가 가장 먼저 추출되어야 합니다.
    pop() {
      // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않아야 합니다
      if (this.top === -1) {
        return;
      }
  
      const result = this.storage[this.top];
      delete this.storage[this.top];
      this.top -= 1;
      
      return result;
    }
  }
const stack = new Stack();

stack.size(); // 0
for(let i = 1; i < 10; i++) {
  	stack.push(i);
}
stack.pop(); // 9
stack.pop(); // 8
console.log(stack)