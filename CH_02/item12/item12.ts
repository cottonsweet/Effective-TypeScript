function rollDice1(sides: number): number {
  // code (함수 선언식)
}

const rollDice2 = function (sides: number): number {
  // code (함수 표현식)
};

const rollDice3 = (sides: number): number => // code (함수 표현식)


// 함수 타입을 정의하여 함수 표현식에 사용
type DiceRollFn = (sides: number) => number;
const rollDice: DiceRollFn = (sides) => sides;