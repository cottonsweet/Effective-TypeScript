// 작은 집합은 한 가지 값만 포함하는 타입이다.
// 타입스크립트에서 유닛(unit) 타입이라고 불리는 리터럴(literal) 타입이다.
type A = "A";
type B = "B";
type Twelve = 12;

// 여러개로 묶으려면 유니온(union)타입을 사용한다.
type AB = "A" | "B"; // A와 B 타입
type AB12 = "A" | "B" | 12; // A와 B, 12 타입

const a: AB = "A"; // 정상 'A'는 집합 {"A", "B"} 의 원소이다.
const c: AB = "C"; // 실패 "C"는 "AB"형식에 할당할 수 없다.

interface Person {
  name: string;
}

interface Lifespan {
  birth: Date;
  death?: Date;
}

/**
 * 타입 연산자는 인터페이스의 속성이 아닌, 값의 집합에 적용된다.
 * 그로인해 Person과 LifeSpan을 둘 다 가지는 값은 인터섹션 타입에 속하게 된다.
 */
type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
  name: "Alan Turing",
  birth: new Date("2020/01/01"),
  death: new Date("1950/04/01"),
}; // 정상
