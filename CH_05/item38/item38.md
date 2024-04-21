# any 타입은 가능한 한 좁은 범위에서만 사용하기

any는 사용하지 않거나 가능한 좁은 범위로 사용하는 것이 좋다.

아예 사용안하진 않겠지만 any를 사용할 경우
타입 체커가 동작을 하지 않기 때문에
유의해서 사용해야 한다.

```ts
function processBar(b: Bar) {}

function f() {
  const x = expressionReturningFoo();
  processBar(x); // Error
}
```

---

위 의 에러를 해결하는 방법은 아래와 같다.

```ts
function f1() {
  const x: any = expressionReturningFoo();
  processBar(x);
}

function f2() {
  const x = expressionReturningFoo();
  processBar(x as any);
}
```

여기선 f1의 방식보단 f2의 방식이 더 좋다.

f1의 방식은 any를 반환하기 때문에
타입 체커가 제대로 동작하지 않는다.

다만 f2는 내부적으로만 any를 사용하기 때문에 외부에 영향을 끼치지 않는다.

- f1에서는 마지막까지 x의 타입이 any이다.

```ts
const configOne: ConfigOne = {
  // config1
  a: 1,
  b: {
    key: value,
  },
};

const configTwo: ConfigTwo {
  // config2
  a:1,
  b: {
    key: value as any
  }
}
```

객체 또한 any를 사용해야 한다면
객체 자체의 타입을 any로 명시하기 보다는
문제가 되는 속성에 any 단언을 해주는게 좋다.

객체 자체의 타입을 any로 명시를 해버리면 타입 체크가 진행되지 않기 때문이다.
