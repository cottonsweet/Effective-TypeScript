# 함수형 기법과 라이브러리로 타입 흐름 유지하기

-타입 흐름을 개선하고, 가독성을 높이고, 명시적인 타입 구문의 필요성을 줄이기 위해 직접 구현하기보다는 내장된 함수형 기법과 로대시 같은 유틸리티 라이브러리를 사용하는 것이 좋다.

타입스크립트에서는 절차형 프로그래밍 방식보다는 함수형 프로그래밍 방식을 사용하는 것이 더 좋다고 한다.

이유는 절차형 프로그래밍에서는 타입 체크를 관리해야 하지만 함수형 프로그래밍에서는 타입의 정보가 잘 유지되어 타입의 흐름이 잘 전달되기 때문이다.