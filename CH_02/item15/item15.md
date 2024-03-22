# 동적 데이터에 인덱스 시그니처 사용하기

자바스크립트의 장점 중 하나는 바로 객체를 생성하는 문법이 간단하다.

```ts
type Rocket = { [property: string]: string };

const rocket: Rocket = {
  name: "test",
  val: "tesa",
  thrust: "111",
};
```

[property: string]: string이 인덱스 시그니처다.

다만 네 가지 단점이 존재

- 잘못된 키를 포함해 모든 키를 허용
- 특정 키가 필요하지 않음
- 키마다 다른 타입을 가질 수 없다
- 자동 완성 기능 동작 불가

---

```ts
interface Rocket {
  name: string;
  var: string;
  thru: number;
}

const falcon: Rocket = {
  name: "fal",
  var: "good",
  thru: 120,
};
```

interface의 정의된 타입으로 인해 모든 필수 필드가 존재한지 확인한다.

즉 자동완성, 정의로 이동, 이름 바꾸기 등 모두 동작한다.

인덱스 시그니처는 동적 데이터를 표현할 때 사용한다.

```ts
function parseCSV(input: string): { [columnName: string]: string }[] {
  const lines = input.split("\n");
  const [header, ...rows] = lines;
  const headerColumns = header.split(",");
  return rows.map((rowStr) => {
    const row: { [columnName: string]: string } = {};
    rowStr.split(",").forEach((cell, i) => {
      row[headerColumns[i]] = cell;
    });
    return row;
  });
}
```
