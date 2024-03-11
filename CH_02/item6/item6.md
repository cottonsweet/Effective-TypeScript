# 편집기를 사용하여 타입 시스템 탐색하기

타입 스크립트를 설치하면, 두 가지를 실행할 수 있다.

- 타입스크립트 컴파일러(tsc)
- 단독으로 실행할 수 있는 타입스크립트 서버(tsserver)

보통은 편집기를 통해서 언어 서비스를 사용하지만, 타입스크립트 서버에서 언어 서비스를
설정하는 게 좋다.

<div align="center">

![](https://velog.velcdn.com/images/ssomcandy777/post/4a0e5cd5-f3a0-40f1-b05e-f6b61e91efc9/image.PNG)

</div>
vsc 편집기 화면. num심벌의 추론된 타입이 number임을 보여준다.

<div align="center">

![](https://velog.velcdn.com/images/ssomcandy777/post/de9c49e6-c869-4a87-b4be-0f013c47f5d0/image.PNG)

</div>

편집기를 통해 함수의 타입을 추론할 수 있다.
다만 함수의 반환타입이 여기선 number인데, 내가 원하거나 또는 기대한 것과 다르다면 타입 선언을 직접 명시해야한다.
