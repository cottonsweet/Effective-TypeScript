# API주석에 TSDoc 사용하기

```
익스포트된 함수, 클래스, 타입에 주석을 달아 놓을때는
JSDoc / TSDoc을 사용하면 부가적인 설명을 추가할 수 있다.
```

```ts
/**
 * @param a 피연산자 1
 * @param b 피연산자 2
 * @returns a와 b를 더한 값을 반환 함
 *
 */
const addResult = (a: number, b: number) => a + b;
```

위와 같이 코드를 작성하면 함수 호출에 마우스를 올렸을 때
TSDoc으로 작성한 설명들이 툴팁으로 표시된다.

---

- @param, @returns 활용하자.
