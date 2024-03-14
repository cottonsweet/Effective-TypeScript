interface Person {
  name: string;
}

const alice: Person = { name: "Kim" }; // 타입 Person "타입 선언"
const bob = { name: "kim" }; // 타입 Person "타입 단언"

const kim: Person = {};
// PErson 유형에 필요한 'name' 속성이 '{}' 유형에 없음

const jin = {} as Person; // 오류 X

documnet.querySelector(".frontEnd").addEventListener("click", (e) => {
  e.curretnTarget; // 타입 EventTarget
  const button = e.curretnTarget as HTMLButtonElement; // 단언
  button; // 타입 HTMlButtonElement
});
