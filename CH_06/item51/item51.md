# 의존성 분리를 위해 미러 타입 사용하기


TypeScript는 구조적 타이핑을 따르기 때문에 사용할 부분만 선언해서 사용해도 문제 없이 동작한다
</br>
아래처럼 사용하는 것을 미러링이라고 하고 일부분의 타입만 필요하다면 미러링을 사용하는 것이 좋다.

```ts
// "Buffer" 대신 선언한 타입
function parseCSV(contents: string | Buffer): { [column: string]: string }[] {
  if (typeof contents === 'object') {
    return parseCSV(contents.toString('utf-8'));
  }
}
```

- 필수가 아닌 의존성을 불리할 때는 구조적 타이핑을 사용
- JavaScript에서 @types, 웹에서 Node.js의 의존성을 갖지 않도록 해야 함