# 함수 안으로 타입 단언문 감추기

타입스크립트에서 any로 타입을 선언하게 될 경우에
타입 체커가 의도한대로 동작하지 않는다.

다만 any사용을 무조건 기피할 필요는 없다.

any를 모든 곳에서 완벽하게 사용하기엔 정말 어려우며
이러한 일을 별 문제 없이 사용하는것이 있는데

타입 단언문을 잘 작성된 함수의 타입 안에 감추는 것이다.

```ts
function cacheLast<T extends Function>(fn: T): T {
  let lastArgs: any[] | null = null;
  let lastResult: any;
  return function (...args: any[]) {
    if (!lastArgs || !shallowEqual(lastArgs, args)) {
      lastResult = fn(...args);
      lastArgs = args;
    }
    return lastResult;
  } as unknown as T;
}
```

any가 선언되었다고 해서 꼭 그 코드는 잘못된 코드라고 볼 수 없다.

일반적으로 타입을 위험하게 만들수 있으나, 상황에 따라 필요할 수 있으며 현실적인 해결방안이 되기도 한다.

불가피하게 사용하는 경우에는 정확한 정의를 가지는 함수 안으로 숨기도록 한다.
