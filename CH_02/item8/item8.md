# 타입 공간과 값 공간의 심벌 구분하기

타입스크립트의 심벌은 타입 공간이나 값 공간 중의 한 곳에 존재한다.

```ts
interface Cylinder {
  radius: number;
  height: number;
}

const Cylinder = (radius: number, height: number) => ({ radius, height });
```

여기서 interface Cylinder에서 Cylinder는 타입으로 쓰이고,
const Cylinder에서 Cylinder와 이름은 같지만 값으로 쓰이기 때문에
서로 아무런 관련이 없다.

---

```ts
type T1 = "string literal";
type T2 = 123;

const v1 = "string literal";
const v2 = 123;
```

```
일반적으로 type, interface 다음에 나오는 심벌은 타입이지만
const, let 변수 키워드로 사용하여 선언에 쓰이는 것은 값이다.
```
