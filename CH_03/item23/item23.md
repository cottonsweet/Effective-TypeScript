# 한꺼번에 객체 생성하기

객체를 생성할 때는 객체를 먼저 생성하고,
해당 객체에 속성을 하나씩 추가하는 것을 지양하고
객체를 한번에 만드는게 좋다.

```ts
const test = {};
test.good = "hi";

// 위 방식 보단 아래의 방식이 더 좋다.

const test = {
  x: 1,
  y: 2,
};
```

---

작은 객체들은 조합해서 큰 객체를 만들어야 하는 경우에는
스프레드 연산자를 사용하여 만들 수 있다.

```ts
const pt = { x: 3, y: 4 };
const id = { name: "Pythagoras" };

const namedPoint = { ...pt, ...id };
namedPoint.name; // OK, type is string
```
