# allowJs로 타입스크립트와 자바스크립트 같이 사용하기

소규모 프로젝트에는 한꺼번에 타입스크립트로 전환이 가능하나
</br>
대규모 프로젝트에는 이러한 부분이 불가능하므로 점진적으로 전환해야 한다.

- 타입스크립트와 자바스크립트가 공존하는 방법의 핵심은 allowJs 컴파일러 옵션이다.

---

번들러에 타입스크립트가 통합 또는 플러그인 방식으로 통합이 가능하다면 ?

아래의 플러그인을 추가할 수 있다.

```
$ browserify index.ts -p [ tsify --allowJs ] > bundle.js
```

jest를 사용하는 경우엔 ts-jest를 설치하고 jest.config.js에 타입스크립트 소스를 지정한다.

```js
module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
```
