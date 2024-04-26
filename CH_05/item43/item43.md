# 몽키 패치보다는 안전한 타입을 사용하기

JavaScript는 유연한 언어라서 이미 정의된 객체, 클래스, 함수에도 속성을 마음대로 추가할 수 있습니다.

몽키패치란, 원래 소스코드를 변경하지 않고 실행 시 코드 기본 동작을 추가, 변경 또는 억제하는 기술을 의미한다


```ts
//보강
interface Document {
    monkey: string;
}

document.monkey = 'Tamarin';   //정상

//사용자 정의 인터페이스로 단언
interface MonkeyDocument extends Document {
    monkey: string;
}

(document as MonkeyDocument).monkey = 'Tamarin';  //정상
```

그러나 보강은 전역적으로 사용되면 코드의 다른 부분이나 라이브러리로부터 분리할 수 없다. 또한 실행되는 동안 속성 할당시, 실행 시점에 보강 적용방법 X

더 구체적인 타입 단언문 사용(document를 확장한 타입을 만들어 단언문으로 사용)

- 그러나 몽키 패치를 남용해서는 안 되며, 더 궁극적으로 설계가 잘된 구조로 리팩터링하는 것이 좋다