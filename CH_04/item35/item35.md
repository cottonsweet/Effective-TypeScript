# 데이터가 아닌, API와 명세를 보고 타입 만들기

```
명세를 참고하여 타입을 생성하는 것이 사용자가 실수를 줄일 수 있게 도와준다.
```

---

```ts
{
  "name":"Choi",
  "age":20,
  "money":99999999999,
  "email":"hello@gmail.com",
  "id":"hello",
  "pw":"hellopw",
}
```

작업을 하다보면 보통 API 명세를 보게 될 것이며, 위 와 같이 JSON 형식의 데이터가 포함되어 있다

TypeScript에서는 이러한 JSON 스키마를 기반으로 인터페이스 또는 타입을 정의할 수 있다.

위 와 같은 JSON 스키마가 있다고 가정한다면

```ts
interface UserInfoType {
  name: string;
  age: number;
  money: number;
  email: string;
  id: string;
  pw: string;
}
```

위 와 같이 인터페이스를 작성할 수 있다.

다만 이 때 데이터가 아닌 명세를 참고하여 타입을 생성해야 한다.

```
데이터의 형식과 구조를 정확히 파악하여 코드 안정성과 가독성을 높일 수 있다.

또한 위 와 같은 기반으로 ts에서 자동완성과 타입 체크등의 기능을 제공하기 때문에
코드작성이 더욱 편리하다.
```
