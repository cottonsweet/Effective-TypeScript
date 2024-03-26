# 변경 관련된 오류 방지를 위해 readonly 사용하기

readonly를 사용하면 의도치 않은 변경으로 인한 에러를 방지하고, 런타임 이전에 확인할 수 있다.

```ts
const test: readonly number[] = [1, 2, 3, 4];

test[0] = 20; // error
```

즉 읽기전용 이므로 원본 배열의 속성이 변경되는 메서드인 pop, push 같은 메서드는 사용이 불가하다.

---

readonly를 사용하면 수정을 할 수 없다.

```ts
type Person = {
  readonly name: string;
  readonly age: number;
};

type MyArray = {
  readonly [index: number]: string;
};

type MyArray2 = readonly string[];
type MyArray3 = string[];

const arr1: MyArray2 = ["kim", "two"];

// 원본배열을 수정하는 pop, push 메서드 등등 사용불가
```
