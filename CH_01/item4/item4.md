# 구조적 타이핑에 익숙해지기

```
자바스크립트는 본질적으로 덕 타이핑 기반이다.

어떤 함수의 매개변수 값이 모두 제대로 주어진다면, 그 값이 어떻게 만들어졌는지
신경 쓰지 않고 사용한다.

타입스크립트는 이런 동작, 즉 매개변수 값이 요구사항을 만족한다면
타입이 무엇인지 신경 쓰지 않는 동작을 그대로 모델링한다.

그로인해 예상치 못한 결과가 나오기도 한다.
```

---

```ts
interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

// 이름이 들어간 벡터타입 추가
interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector = { x: 3, y: 4, name: "Zee" };
calculateLength(v); // 5
```

```
Vector2D, NamedVector 서로간의 관계를 전혀 선언하지 않았고,
NamedVector를 위한 별도의 calLength 함수를 구현하지 않았으나

타입스크립트 타입 시스템은 자바스크립트의 런타임 동작을 모델링한다.

Vector2D, NamedVector 각 구조가 호환되기 때문에 호출이 가능하며

여기서 '구조적 타이핑'이라는 용어가 사용된다.
```

# 구조적 타이핑의 대한 문제 고찰

```ts
interface Vector3D {
  x: number;
  y: number;
  z: number;
}

interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

function normalize(v: Vector3D) {
  const length = calculateLength(v);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

normalize({ x: 3, y: 4, z: 5 }); // {x:0.6, y:0.8, z:1}
```

```
여기서 타입스크립트가 오류를 잡지 못한 이유는
normalize 함수안에 호출된 calculateLength 함수는 Vector2D 벡터타입 기반으로
연산을 하는데,
버그로 인해 normalize가 Vector3D으로 연산되었다.

즉 z 정규화가 무시되었다.

이러한 이유는 Vector3와 Vector2 서로간의 구조적 타이핑 관점에서
x와 y가 있어서 Vector2와 호환이 되는데 이로인해
오류가 발생하지 않았고, 타입 체커가 문제로 인식하지 않았다.
```
