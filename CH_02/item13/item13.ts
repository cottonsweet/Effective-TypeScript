// 타입
type Tstate = {
  name: string;
  capital: string;
};

// 인터페이스
interface Istate {
  name: string;
  capital: string;
}

// 인터페이스 확장
interface IStateWithPop extends Tstate {
  population: number;
}

// 타입 확장
type TStateWithPop = IState & { population: number };
