# 타입 추론에 문맥이 어떻게 사용되는지 이해하기

- 타입스크립트는 문맥에 따라 타입 추론이 다르다

- let/const 키워드에 따라 타입 추론이 다름
  - const 키워드 사용시 좀 더 좁은 타입으로 추론됨

```ts
let jslet = "hello";
// string

const testconst = "javascript";
// javascript
```

let 키워드로 변수를 선언할 경우 jslet 변수는 string 타입으로 추론되지만

const 같은경우에는 javascript로 추론된다.

즉 "변수를 선언할 때 재할당 가능성이라는 문맥을 바탕으로 타입 추론을 다르게한다" 는 것을 알 수 있다.
