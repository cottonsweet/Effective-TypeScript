# 타입과 인터페이스의 차이점 알기

타입스크립트에서 명명된 타입을 정의하는 방법은 두 가지가 있다.

- type
- interface

```ts
type Tstate = {
  name: string;
  capital: string;
};

interface Istate {
  name: string;
  capital: string;
}
```

interface와 type의 비슷한 점은
인덱스 시그니처는 인터페이스와 타입에서 모두 사용할 수 있으며
함수타입도 인터페이스나 타입으로 정의할 수 있다.

또한 타입별칭과 인터페이스는 모두 제너릭이 가능하다.

```ts
type TDict = { [key: string]: string };
interface IDcit {
  [key: string]: string;
}

typeTfn = (x: number) => string;
interface IFn {
  (x: number): string;
}

const toStrT: TFn = (x) => "" + x;
const toStrI: IFn = (x) => "" + x;
```

interface는 유니온 이라는 개념이 없다.

```ts
type AorB = "a" | "b"; // a 또는 b
```

type와 interface는 확장에서 문법적인 차이가 발생한다.

```ts
interface IStateWithPop extends Tstate {
  population: number;
}

type TStateWithPop = IState & { population: number };
```
