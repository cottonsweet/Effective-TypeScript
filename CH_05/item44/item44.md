# 타입 커버리지를 추적하여 타입 안정성 유지하기

noImplicitAny를 사용하더라도 모든 any에 대해서 타입 안전을 보장하지 않는다.

또한 any의 개수를 추적할 수 있는 패키지가 존재한다.

npm의 type-coverage 패키지를 활용하여 any를 추적할 수 있다.

npx type-coverage --detail 명령어를 사용하면 any 타입이 있는 곳을 모두 출력해준다.

```
npm i -D type-coverage

npx type-coverage

npx type-coverage --detail
```
