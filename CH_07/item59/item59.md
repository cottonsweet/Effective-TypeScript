# 타입스크립트 도입전에 @ts-check와 JSDoc으로 시험 해보기

@ts-check를 사용할 경우 어떤 문제가 발생하는지 미리 볼 수 있다.
</br>
다만 noImpllicitAny 설정을 해제한 것보다 헐거운 체크를 수행한다.

```ts
// @ts-check
const person = { first: "Grace", last: "Hopper" };
2 * person.first;
// ~~~~~~ 산술 연산 오른쪽은 'any', 'number', bigint'
//        또는 열거형 형식이여야 한다.
```

person 객체의 first 키는 string 타입으로 추론된다.
string 타입으로 추론되어있는 키를 연산 곱셈식으로 진행하여 타입 불일치 오류가 발생한다.

## 선언되지 않은 지역변수

```ts
// @ts-check
console.log(user.firstName);
// ~~~~ 'user' 찾을 수 없음
```

user를 찾을 수 없어 오류가 발생되나 아래처럼 선언할 경우 오류를 해결할 수 있다.

```ts
interface UserData {
  firstName: string;
  lastName: string;
}

declare let user: UserData;
```

---

## 알 수 없는 라이브러리

서드파티 라이브러리를 사용하는 경우, 해당 라이브러리의 타입 정보를 알아야 한다.

```ts
// @ts-check
$("#graph").style({ width: "100px", height: "100px" });
// ~~~~~ '$'를 찾을 수 없음
```

```
npm install --save-dev @types/jquery
```

제이쿼리 타입 선언을 설치할 경우 제이쿼리 사양 정보를 참조하게 된다.

```ts
// @ts-check
$("#graph").style({ width: "100px", height: "100px" });
// ~~~~~ 'JQuery<HTMLElement>' 형식에 'style' 속성이 없음

// 여기서 style 메서드를 .css로 변경하면 오류가 사라진다.
```
