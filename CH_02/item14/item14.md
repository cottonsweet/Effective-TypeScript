# 타입 연산과 제너릭 사용으로 반복 줄이기

✅같은 코드를 반복하지 말라 (DRY : Don't repeat yourself) 원칙을 타입에도 적용해야 한다
</br>
</br>
✅타입 인덱싱, extends를 통해 인터페이스 필드의 반복 줄일 수 있음
</br>
</br>
✅추가로 keyof, typeof, 매핑된 타입을 활용
</br>
</br>
✅제네릭 타입은 타입을 위한 함수이며 제네릭 매개변수를 제한하기 위해 extends 활용 가능
</br>
</br>
✅Pick, Partial, ReturnType 같은 유틸리티 타입에 익숙해야 함

---

타입 정의에서도 DRY원칙 (Don't Repeat Yourself) 을 적용할 수 있다.

반복을 줄이는 가장 간단한 방법은 타입에 이름을 붙이는 것이다.

```ts
interface Person {
  firstName: string;
  lastName: string;
}

// 개선 전
interface PersonWithBirthDate1 {
  firstName: string;
  lastName: string;
  birth: Date;
}

// 개선 후
interface PersonWithBirthDate2 extends Person {
  birth: Date;
}

type PersonWithBirthDate3 = Person & { birth: Date };

// 또 다른 예시의 코드

// 개선 전
function get(url: string, opts: Optoins): Promise<Response> { /* ... */ }
function post(url: string, opts: Optoins): Promise<Response> { /* ... */ }

// 개선 후
type HTTPFunc = (url: string, opts: Options) => Promise<Response>
function get: HTTPFunc = (url, opts) => { /* ... */ }
function post: HTTPFunc = (url, opts) => { /* ... */ }
```

---

정의된 객체의 각 프로퍼티에 할당한 값에 따라 동일한 구조를 가진 타입을 만들고 싶다면
typeof를 사용하면 된다.

```ts
const webInformation = {
  width: 1920,
  height: 1080,
  color: "#00FF00",
};

type Options = typeof webInformation;
```

---

태그된 유니온(tagged union)에서도 ActionType1 처럼 중복이 발생할 수 있다. 이럴 때는 ActionType2와 같이 앞서 정의한 Action 유니온을 인덱싱하면 반복을 없앨 수 있다.

```ts
interface SaveAction {
  type: "save";
  // ...
}
interface LoadAction {
  type: "save";
  // ...
}

type Action = SaveAction | LoadAction;

type ActionType1 = "save" | "load"; // 타입은 'save' | 'load'
type ActionType2 = Action["type"]; // 타입은 'save' | 'load'
```

---

만약 기존에 존재하던 타입에서 부분집합을 만들고 싶은 경우에는 다음과 같이 작성할 수 있다.

```ts
interface NavState {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

interface TopNavState {
  [(k in "userId") | "pageTitle" | "recentFiles"]: NavState[k];
}
```

```
같은 의도를 구현하기 위해 interface가 아닌 type을 사용할 수도 있다. 이를 Pick 패턴이라고 한다.
```

```ts
// Pick 패턴
type Pick<T, K> = { [k in K]: T[k] };

// 적용
type TopNavState = Pick<NavState, "userId" | "pageTitle" | "recentFiles">;
// { userId: string; pageTitle: string; recentFiles: string[]; }
```
