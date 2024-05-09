# 객체를 순회하는 노하우

아래코드의 객체를 순회를 하였을 때 어떤결과가 나올까 ?

```ts
const obj = {
  a: string,
  b: string,
  c: number,
};

for (const k in obj) {
  const v = obj[k]; // obj에 인덱스 시그니처가 없으며 암시적으로 any타입 .......
}
```

객체 순회시 키가 어떤 타입인지 명확하게 알고 있다면
keyof T와 for-in 루프를 사용하는 것이 좋다.

일반적인 객체를 순회하여 키와 값을 얻는 방법은 Object.entries를 사용한다.

```ts
function foo(ob: obj) {
  for (const [k, v] of Object.entries(ob)) {
    k;
    v;
  }
}
```

- 이번 파트 내용은 이해 안 가는 부분이 너무 많아 다시 한번 훑어야 할거 같다.
