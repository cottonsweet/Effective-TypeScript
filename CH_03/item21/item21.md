# 타입 넓히기

타입스크립트가 작성된 코드를 체크하는 정적 분석 시점에, 변수는 '가능한' 값들의 집합을 가진다.

```ts
interface Vector3 {
  x: number;
  y: number;
  z: number;
}
function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
  return vector[axis];
}

let x = "x";
let vec = { x: 10, y: 20, z: 30 };
getComponent(vec, x);
// 'string' 형식의 인수는 '"x" | "y" | "z"' 형식의 매개변수에 할당할 수 없습니다.
```

## 넓히기 과정 제어

- const로 선언하기
  객체는 선언시 모양을 기준으로 추론되기 때문에, 한번에 만들어야 함

const : 재할당을 막기에 타입스크립트가 더 좁은 타입으로 추론할 수 있다

또한 명시적으로 타입을 지정할 수도 있다.

```ts
const v: { x: 1 | 3 | 5 } = {
  x: 1,
}; // Type is { x: 1 | 3 | 5; }
```

---

값 뒤에 as const를 작성하면 타입스크립트는 최대한 좁은 타입으로 추론한다.

```ts
const v1 = {
  x: 1,
  y: 2,
}; // type : {x: number; y: number;}
const v2 = {
  x: 1 as const,
  y: 2,
}; // type : {x: 1; y: number;}
const v3 = {
  x: 1,
  y: 2,
} as const; // type : {readonly x: 1; readonly y: 2;}
```
