# 오버로딩 타입보다는 조건부 타입 사용하기

조건부 타입은 추가적인 오버로딩 없이 유니온 타입을 지원할 수 있다.

```ts
// 오버로딩 타입
function double(x: number | string): number | string;

// 조건부 조건 
function dobule<T extends number | string>(
  x: T
): T extends string ? string : number; //=> string 의 부분 집합이면 string, 그외는 number

function double(x: any) {
  return x + x;
}
```