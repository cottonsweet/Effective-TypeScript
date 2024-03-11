function logMessage(message: string | null) {
  if (message) {
    message; // 조건문 내부에선 message가 string 이다.
  }
  message; // 조건문 외부에선 message가 string | null 이다.
}

function add(a: number, b: number) {
  // 함수의 매개변수, 반환 타입은 전부다 number이다.
  return a + b;
}

function add2(a: number, b: number): string {
  // 반환타입을 강제로 변환하여 함수의 반환타입은 number가 아닌 string 타입으로 반환한다.
  return String(a + b);
}
