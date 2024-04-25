# 모르는 타입의 값에는 any 대신 unknown을 사용하기

만약 함수의 반환 값 또는 매개변수를 알 수 없다면
</br>
any가 아닌 unknown을 사용해야 한다.

---

**any**

- 어떠한 타입이든 any에 할당이 가능함
- any 타입은 어떠한 타입으로도 할당이 가능함

**unknown**

- 어떠한 타입이든 unknown에 할당이 가능함
- unknown 타입은 any와 달리 어떠한 타입 으로도 할당 불가

```ts
interface Book {
  name: string;
}
declare function isBook(book: unknown): book is Book;
declare class Book {}

const func = (v: unknown) => {
  // (1)
  if (v instanceof Book) {
    v.name; // v: Book
  }

  // (2)
  if (isBook(v)) {
    v.name; // v: Book
  }

  // (3)
  (v as Book).name;
};
```

- 어떤 값이 존재하나 다만 그 값에 타입을 확인할 수 없을때 unknown 사용

- {} 타입은 null과 undefined를 제외한 모든 값을 포함한다.

- object 타입은 모든 비기본형 타입으로 이루어진다.
