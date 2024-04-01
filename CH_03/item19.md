# 추론 가능한 타입을 사용해 장황한 코드 방지하기

TypeScript에서 추론을 해준다면 명시적 타입은 지양하는게 좋다.
오히려 TypeScript에서의 추론이 더 세밀하고 정확할 때가 많다.

```ts
const name: string = "hello"; // 1번 예제

const name = "hello"; // 2번 예제
```

1번과 2번은 모두 같은 타입으로 추론된다.

```ts
const a = 200;
```

a의 타입은 number라고 볼 순 있으나, TypeScript는 200이라고 추론한다.
const 원시 타입은 변경할 수 없기 때문에 더 정확한 추론이라고 볼 수 있다.

해당 부분은 객체에서도 동일하다.

```ts
type Profile = {
  id: string;
  name: string;
  price: number;
};

const userProfile = (profile: Profile) => {
  const id: string = profile.id;
  const name: string = profile.name;
  const price: number = profile.price;
};
```

위와 같은 객체에서도 명시적 타입이 아닌, 타입 추론을 믿고 그대로 사용하면 된다.

## 명시적으로 타입을 작성해야 하는 경우는 ?

```ts
const userDataInfo = {
  id: 12341,
  name: "kim",
  password: "1234",
  money: 999999999,
};

type userInfoType = {
  id: number;
  name: string;
  password: number;
  money: number;
};

const getUserInfo = (info: userInfoType) => {
  return info.password;
};

getUserInfo(userDataInfo); //error
```

getUserInfo의 매개변수로 전달된 userDataInfo의 객체에는 password가 문자열 타입이다.

password의 명시적 타입은 number로 지정이 되어 있기 때문에 userDataInfo.password의 값을 전달할 경우 에러가 발생된다.

즉 타입에 관한 에러가 발생하기 때문에 오타같은 실수를 잡을 수 있다.

---

# 🎊 Item 19 결론

타입 추론이 될 경우에는 명시적 타입 작성을 지양하자</br>
함수의 경우에는 함수 시그니처 타입을 사용하는 것이 좋음</br>
정해진 타입이 있는 특별한 경우에 명시적으로 타입을 정하기
