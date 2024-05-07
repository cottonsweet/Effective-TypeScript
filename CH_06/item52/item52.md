# 테스팅 타입의 함정에 주의하기

프로젝트를 공개하려면 테스트 코드 작성은 필수이며,
</br>
타입 선언도 테스트를 거쳐야 한다.

```ts
const beatles = ["john", "paul", "george", "ringo"];
map(
  beatles,
  function (
    name, // $ExpectType string
    i, // $ExpectType number
    array // $ExpectType string[]
  ) {
    this; // $ExpectType string[]
    return name.length;
  }
); // $ExpectType number[]
```

해당 파트에서 말하는 부분은 DefinitelyTyped의 타입 선언을 위한 도구인
</br>
dtslint를 사용하는 것을 추천한다.

- 타입 테스트시 함수 타입의 동일성, 할당 가능성의 차이점을 알아야 한다.
- 콜백이 있는 함수를 테스트할 때는 콜맥 매개변수와 this 전부다 테스트해야 한다.
- 테스트시 any를 주의해야하며, dtslint 같은 도구를 사용을 추천한다.
