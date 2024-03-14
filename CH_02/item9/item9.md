# 타입 단언보다는 타입 선언을 사용하기

```ts
interface Person {
  name: string;
}

const alice: Person = { name: "Kim" }; // 타입 Person "타입 선언"
const bob = { name: "kim" }; // 타입 Person "타입 단언"
```

타입 단언보단, 타입 선언을 사용해야 하는 이유는 강제로 타입을 지정했으니
타입 체커에게 오류를 무시하라고 하는 것과 같다.

```ts
const alice: Person = {};
// PErson 유형에 필요한 'name' 속성이 '{}' 유형에 없음

const bob = {} as Person; // 오류 X
```

다만 타입스크립트는 DOM에 접근할 수 없기 때문에
즉 타입스크립트가 알지 못하는 정보를 가지고 있을때는
타입 단언문을 사용하는 것이 타당하다.

```ts
documnet.querySelector(".frontEnd").addEventListener("click", (e) => {
  e.curretnTarget; // 타입 EventTarget
  const button = e.curretnTarget as HTMLButtonElement; // 단언
  button; // 타입 HTMlButtonElement
});
```
