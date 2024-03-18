# 잉여 속성 체크의 한계 인지하기

타입이 명시된 변수에 객체 리터럴을 할당할 때 타입스크립트는
해당 타입의 속성이 있는지, 그리고 '그 외의 속성이 없는지' 확인한다.

```ts
interface Room {
  numDoors: number;
  ceilineHeightFt: number;
}

const r: Room = {
  numDoors: 1,
  ceilineHeightFt: 10,
  elephant: "present",
  // 'Room' 형식에 'elephant'가 없다.
};
```

다만 item4에서 배운 내용인 구조적 타이핑 관점으로 생각한다면
오류가 발생하지 않아야 한다.

```ts
const obj = {
  numDoors: 1,
  ceilineHeightFt: 10,
  elephant: "good",
};

const r: Room = obj; // true
```

둘의 차이점은 첫 번째 예제는 구조적 타입 시스템에서 발생할 수 있는 중요한 종류의 오류를 잡을 수 있는 '잉여 속성 체크' 과정이 수행 되었으나,
두번째는 그 과정이 수행되지 않았다.

즉 쉽게 말해 객체 리터럴을 변수에 할당하거나 함수에 매개변수로 전달할 때
잉여 속성 체크가 수행된다.

한가지 더 예시를 보자

```ts
interface Option {
  title: string;
  darkMode: boolean;
}

const intermediate: Option = { darkmode: true, title: "hello" };
// darkMode를 쓰려고 했습니까 ?

const o: Option = intermediate; // 정상
```

첫번쨰 intermediate는 객체 리터럴로 인해 잉여 속성 체크의 과정이 이루어지지만
두번째는 잉여 속성 체크가 적용되지 않기 때문에 오류는 사라진다.
