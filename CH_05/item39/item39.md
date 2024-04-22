# any를 구체적으로 변형해서 사용하기

any를 사용할 땐 타입의 제한 없이 어떠한 타입도
받을 수 있기 때문에
</br>
any를 사용한다면
최대한 구체적으로 표현해야 한다.

```ts
// 배열의 길이를 반환하는 함수

function getArrLengthOne(arr: any) {
  return arr.length;
}

function getArrLengthTwo(arr: any[]) {
  return arr.length;
}

function getArrLengthThree(arr: number[]) {
  return arr.length;
}
```

위 함수의 경우 반환 값은 배열의 길이를 반환하는건 동일하고
함수가 받는 매개변수 또한 문제없이 어떠한 모든 타입을 받을 수 있다.

다만 1의 함수의 경우엔 매개변수가 구체적으로 어떠한 타입 유형의 매개변수는 알수 없으나
2의 경우엔 배열 형태의 타입을 받는다는 것을 알 수 있다.

즉 길이를 구하는 게 목적이며 any를 사용한다면 1번의 함수보단
2번의 함수가 좀 더 구체적이다.

그리고 3으로 사용한다면 더 구체적이다.
(제일 좋은 방법은 가급적 any 사용은 지양하는게 좋다)
