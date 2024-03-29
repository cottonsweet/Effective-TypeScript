# 타입스크립트 설정 이해하기

```ts
function add(a, b) {
  // 매개변수 a와 b의 타입이 명시가 되어있지 않음
  return a + b;
}

add(10, null);
```

```
타입스크립트 컴파일러는 매우 많은 설정을 가지고 있으므로
현재 시점에는 설정이 거의 100개 가량이다

이 설정들은 커맨드 라인에서도 사용이 가능하다
$ tsc --noImplicitAny program.ts

또는 tsconfig.json 설정 파일을 통해서도 가능한데,
가급적이면 설정 파일을 사용하는것이 좋다.
그 이유는 타입스크립트를 어떻게 사용할 계획인지 동료들이나 다른 도구들이 알 수 있다.

위 코드에서는 매개변수에 각 any타입을 명시하지 않았으나, any타입으로 간주되는데 이를 암시적 any라고 한다.
```

---

```ts
function add(a: number, b: number) {
  return a + b;
}
```

```
이 오류들은 명시적으로 any라고 선언하거나 또는 구체적인 타입을 사용하면 된다.
```
