# any 타입 지양하기

```ts
let age: number;
age = "20"; // "20" 형식은 'number'타입 형식에 할당할 수 없다.

age = 12 as any; // 정상
```

```
타입스크립트 타입 체커를 통해 코드에서 오류를 찾아낼 수 있다.
다만 any타입, 타입 단언문(as any)를 사용할 경우
타입스크립트의 수많은 장점을 누릴수가 없게된다.
```

---

# any타입의 단점

- any 타입에는 타입 안정성이 없다.
- - 앞 예제에서 age는 number타입이나, as any를 사용할 경우 number가 아닌 string 타입을 할당할 수 있게된다.
- any는 함수 시그니처를 무시한다.
- - 원래대로라면 birth 매개변수에는 date 타입으로 전달이 되어야하지만, any 타입을 사용함으로 인해 함수 calculateAge 시그니처를 무시하게 된다.
- any 타입에는 자동완성 서비스가 적용되지 않는다.
- 코드 리팩터링 때 버그를 감추고, 타입 설계를 감춘다.
- 타입시스템의 신뢰도를 떨어뜨립니다.

```ts
// 시그니처 무시 예제코드
function calculateAge(birth: Date): number {
  // code
}

let birthDate: any = "2020";
calculateAge(birthDate);
```

---
