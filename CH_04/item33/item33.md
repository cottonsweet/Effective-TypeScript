# string 타입보다 더 구체적인 타입 사용하기

```
string 타입의 범위는 매우 넓다.
그렇기 때문에 string 타입으로 변수를 선언하려 한다면
그보다 더 좁은 타입이 적절하지 않은지 검토해야 한다

즉 남발하지 말자 !!
```

---

```ts
interface Album {
  artist: string;
  title: string;
  releaseDate: string; // YYYY-MM-DD
  recordingType: string; // "live" or "studio"
}
```

여기서 releaseDate에 우리는 연도라는 값의 타입이란걸 알 수 있지만
string으로 정의하였기에
</br>
엉뚱한 string 값이 들어가도
타입체커에는 string 타입으로 정의가 되어 있기 때문에
문제 없이 통과된다.

아래와 같이 개선하여 사용하도록 하자

```ts
type RecordingType = "studio" | "live";

interface Album {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: RecordingType;
}
```

keyof 연산자로 더욱 세밀하게 속성 체크가 가능하다.

```ts
// 개선 전
function pluck(records: any[], key: string): any[] {
  return records.map((r) => r[key]);
}

function pluck<T>(records: T[], key: keyof T): T[keyof T][] {
  return records.map((r) => r[key]);
}

pluck(albums, "releaseDate"); // (string | Date)[]

// 개선 후
function pluck<T, K extends keyof T>(records: T[], key: K): T[K][] {
  return records.map((r) => r[key]);
}

pluck(albums, "artist"); // string[]
pluck(albums, "releaseDate"); // Date[]
```

---

- 문자열을 남발하여 선언된 코드를 피해야 함 / string 타입보단 구체화된 타입을 사용하는 것이 좋음
- 문자열 리터럴 타입의 유니온을 사용해 타입 체크를 엄격히 하도록 해야함
- 객체의 속성 이름을 매개변수로 받을 때는 keyof T를 사용하는 것이 좋음
