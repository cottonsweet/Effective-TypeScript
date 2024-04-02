# 다른 타입에는 다른 변수 사용하기

변수의 값은 변할 수 있지만 타입은 보통 변하지 않는다

```ts
// Bad
let id: string | number = "12-34-56";
fetchProduct(id);

id = 123456;
fetchProductBySerialNumber(id);

// Good
const id = "12-34-56";
fetchProduct(id);

const serial = 123456;
fetchProductBySerialNumber(serial);
```
