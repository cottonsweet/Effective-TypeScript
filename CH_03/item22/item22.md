# 타입 좁히기

타입스크립트에서 타입 넓히기가 있다면
넓은 타입으로부터 좁은 타입으로 진행하는 과정을 말한다.

```ts
const el = document.getElementById("foo"); // type : HTMLElement | null
if (el) {
  // type : HTMLElement
  el.innerHTML = "1";
} else {
  // type : null
  alert("no element");
}

if (!el) throw new Error("no element"); // type : null
el.innerHTML = "1"; // type : HTMLElement
```

각 분기별로 타입을 좁힐 수 있다.

---

또한 instanceof를 사용하여도 타입 좁히기도 가능하다.

```ts
function contains(text: string, search: string | RegExp) {
  if (search instanceof RegExp) {
    search; // type : RegExp
    return !!search.exec(text);
  }
  search; // type : string
  return text.includes(search);
}
```

---

속성 체크로도 가능하다.

```ts
interface A {
  a: number;
}
interface B {
  b: number;
}
function pickAB(ab: A | B) {
  if ("a" in ab) ab; // type : A
  else ab; // type : B

  ab; // type : A | B
}
```

---

Array.isArray와 같은 내장 함수로도 타입 좁힐 수 있다.

```ts
function contains(text: string, terms: string | string[]) {
  const termList = Array.isArray(terms) ? terms : [terms];
  termList; // 타입이 string[]
}
```

---

사용자 정의 타입 카드 타입 좁히기

```ts
const isDefined = <T>(x: T | undefined): x is T => {
  return x !== undefined;
};
```
