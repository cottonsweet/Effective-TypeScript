# 타입스크립트 컴파일러

```
타입 스크립트는 두 가지 역할을 수행한다.

- 최신 타입스크립트/자바스크립트를 브라우저에서 동작할 수 있도록 구버전의 자바스크립트로 트랜스파일 한다.
- 코드의 타입 오류를 체크한다.

이때 이 두 가지는 서로 완벽히 독립적이다.
```

---

# 런타임에는 타입 체크가 불가하다.

```ts
interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Shape) {
    // Rectangle은 형식만 참조하지만, 여기서는 값으로 사용되고 있다.
    return shape.width * shape.height;
  } else {
    return shape.width * shape.height;
  }
}
```

```
instanceof 체크는 런타임에 일어나지만, Rectangle은 타입이기 때문에
런타임 시점에서는 아무런 역할을 할 수 없다.

즉 자바스크립트로 컴파일되는 과정에서 모든 인터페이스, 타입, 타입 구문은 제거된다.
```

---

# 타입스크립트 타입은 런타임 성능에 영향을 주지 않는다.

```
타입과 타입 연산자는 자바스크립트 변환 시점에 제거되기 때문에,
런타임의 성능에 아무런 영향을 주지 않는다.

이로인해 실제비용이 전혀 들지 않음
```
