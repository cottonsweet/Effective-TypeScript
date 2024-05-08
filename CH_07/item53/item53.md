# 타입스크립트 기능보다는 ECMAScript 기능을 사용하기

자바스크립트는 결함이 많고 개선해야 할 부분이 많은 언어다.
</br>
클래스, 데코레이터, 모듈 시스템 같은 기능이 없어서 프레임워크나 트랜스파일러로 보완하는 것이 일반적이었기에
</br>
타입스크립트 또한 초기 버전에는 독립적으로 개발한 클래스, 열거형, 모듈 시스템을 포함시킬 수 밖에 없었다.

## 열거형

```ts
enum Flavor {
  VANILLA = 0,
  CHOCOLATE = 1,
  STRAWBERRY = 2,
}

let flavoer = Flavor.CHOCOLATE; // type: Flavor
```

- 숫자 열거형에 0, 1, 2 외 다른 숫자가 할당될 경우 매우 위험하다.
- 상수 열거형은 보통의 열거형과 달리 런타임에 완전히 제거 됨

## 매개변수 속성

클래스 초기화시 생성자와 매개변수 사용한다.

```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// TS
class Person {
  constructor(public name: string) {}
}
```

- TS컴파일은 타입 제거가 이루어져 코드가 줄어들지만, 매개변수 속성은 코드가 늘어난다.
- 매개변수 속성이 런타임에는 실제로 사용되나, TS관점에서는 사용되지 않음
