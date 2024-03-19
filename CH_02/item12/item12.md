# 함수 표현식에 타입 적용하기

자바스크립트에서는 함수'문장(statement) / 선언식' 과 함수'표현식(expression)' 을 다르게 인식한다.

```ts
function rollDice1(sides: number): number {
  // code (함수 선언식)
}

const rollDice2 = function (sides: number): number {
  // code (함수 표현식)
};

const rollDice3 = (sides: number): number => // code (함수 표현식)
```

타입스크립트에서는 함수 표현식을 사용하는 것이 좋다
그 이유는 함수의 매개변수 부터 반환값까지 전체를 함수 타입으로 선언하여
함수 표현식에 재사용이 가능하다.

```ts
type DiceRollFn = (sides: number) => number;
const rollDice: DiceRollFn = (sides) => sides;
```

위 와 같이 재사용이 가능한데, 좀 더 극단적으로 진행을 하자면

```ts
function add(a: number, b: number) {
  return a + b;
}
function sub(a: number, b: number) {
  return a - b;
}
function mul(a: number, b: number) {
  return a * b;
}
function div(a: number, b: number) {
  return a / b;
}
```

4개의 함수를 선언하였고, 각 함수의 매개변수의 값에 따라 어떠한 숫자인 값을 반환한다.
이러한 반복되는 함수 시그니처를 하나의 함수 타입으로 통압할 수 있다.

```ts
type BinaryFn = (a: number, b: number) => number;

const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;
```
