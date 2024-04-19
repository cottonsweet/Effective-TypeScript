# 해당 분야의 용어로 타입 이름 짓기

타입, 변수의 이름을 잘 짓는 것은 추상화의 수준과 가독성을 높일 수 있다

```ts
// 개선 전
interface Animal {
  name: string;
  endangered: boolean;
  habitat: string;
}

// 개선 후
interface Animal {
  commonName: string;
  genus: string;
  species: string;
  status: ConservationStatus;
  climates: KoppenClimate[];
}

type ConservationStatus = 'EX' | 'EW' | 'CR' | 'EN' | 'VU' | 'NT' | 'LC';
type KoppenClimate = 'Af' | 'Am' | 'As' | 'Aw' | 'BSh' | 'BSk' | 'BWh' | 'BWk'; 
```

```
자체적으로 용어를 만들어내기보다 해당 분야에 이미 존재하는 용어를 사용하자. 이렇게 하면 타입의 명확성을 올릴 수 있다. 
좋은 이름은 추상화의 수준을 높이고 의도치 않은 충돌의 위험성을 줄여준다.
```