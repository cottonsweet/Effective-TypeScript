# any의 진화를 이해하기

타입스크립트에서 변수의 타입은 일반적으로 변수를 선언할 때 결정이 된다.

다만 any 타입의 경우 예외인 경우가 존재한다.

```ts
function range(start: number, limit: number) {
  const out = []; // 1 type: any
  for (let i = start; i < limit; i++) {
    out.push(i); // 2 type: any[]
  }
  return out; // 3 type: number[]
}
```

- 1.out 타입은 처음에는 암시적 any로 초기화
- 2.반복문 구간에서 any[]
- 3.마지막 반환 타입에서는 numberp[]로 등장한다.

즉 초기 타입은 암시적 any였으나, number타입의 값을 넣은 순간
타입이 진화한 것이다.

---

조건문의 분기에따라 타입이 변할 수도 있으나
명시적으로 any를 선언할 경우에는 타입이 그대로 유지된다.

```ts
let userName: any;

if (1 > 5) {
  userName = "hello";
  userName; // any
} else {
  userName = 999;
  userName; // any
}

userName; // any
```

```
어떤 변수가 암시적 any 상태일 때 값을 읽으려고 할 경우 오류 발생
```
