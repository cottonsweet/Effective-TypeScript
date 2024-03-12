# 타입이 값들의 집합이라고 생각하기

모든 변수는 자바스크립트 값으로부터 장해진 각자의 고유한 값을 가진다.

```
- 42
- null
- undefined
- 'string'
- { animal:'banana' }
- /regex/
- new HTMLButtonElement
- (x, y) => x + y
```

타입스크립트가 오류를 체크하는 순간에는 "타입"을 가지고 있으며
"할당 가능한 값들의 집합"이 타입이다.

```ts
// 작은 집합은 한 가지 값만 포함하는 타입이다.
// 타입스크립트에서 유닛(unit) 타입이라고 불리는 리터럴(literal) 타입이다.
type A = "A";
type B = "B";
type Twelve = 12;

// 여러개로 묶으려면 유니온(union)타입을 사용한다.
type AB = "A" | "B"; // A와 B 타입
type AB12 = "A" | "B" | 12; // A와 B, 12 타입
```

---

```ts
type AB = "A" | "B"; // A와 B 타입

const a: AB = "A"; // 정상 'A'는 집합 {"A", "B"} 의 원소이다.
const c: AB = "C"; // 실패 "C"는 "AB"형식에 할당할 수 없다.
```
