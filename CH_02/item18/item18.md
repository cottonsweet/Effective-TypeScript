# 매핑된 타입을 사용하여 값을 동기화하기

산점도(Scattter plot) : 좌표상의 점들을 표시함으로써 두 개 변수 간의 관계를 나타내는 그래프 방법

산점도를 그리기 위한 UI 컴포넌트를 작성한다고 가정해보겠습니다.

```ts
interface ScatterProps {
  //The data
  xs: number[];
  ys: number[];

  //Display
  xRange: [number, number];
  yRange: [number, number];
  color: string;

  //Event
  onClick: (x: number, y: number, index: number) => void;
}
```

데이터나 디스플레이 속성이 변경되는 것 처럼 필요할 때에만 차트를 다시 그리고, 이벤트 핸들러가 변경되면 다시 그릴 필요가 없습니다.
</br>
이 코드를 아래와 같이 최적화 할 수 있습니다.

## 보수적 접근법

```ts
function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
  let k: keyof ScatterProps;
  for (k in oldProps) {
    if (oldProps[k] !== newProps[k]) {
      if (k !== "onClick") return true;
    }
  }
  return false;
}
```

props 얕은 비교를 진행해서 onClick 이 바뀐 것이 아니면 true 를 리턴합니다.
</br>
(onClick 은 익명함수로 매번 새로 선언되기 때문에 예외처리를 해준 것) 보수적 접근법을 이용하면 차트가 정확하지만 너무 자주 그려질 가능성이 있습니다.

## 실패에 열린 접근법

```ts
function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
  return (
    oldProps.xs !== newProps.xs ||
    oldProps.ys !== newProps.ys ||
    oldProps.xRange !== newProps.xRange ||
    oldProps.yRange !== newProps.yRange ||
    oldProps.color !== newProps.color
    //(no check for onClick)
  );
}
```

하나씩 일일이 비교하고, onclick 에 대해서는 비교하지 않습니다.

실패에 열린 접근법은 차트를 불필요하게 다시 그리는 단점을 해결했지만 실제로 차트를 다시 그려야 할 경우에 누락되는 일이 생길 수도 있습니다.

ScatterProps 객체에 새로운 속성이 추가되면 그 속성은 변경을 감지할 수 없기 때문입니다.

보수적 접근법과 실패에 열린 접근법 모두 이상적이지 않습니다.

아래는 타입 체커가 동작하도록 개선한 코드이다. 핵심은 매핑된 타입과 객체를 사용하는 것 입니다.

만약 아래와 같이 코드를 작성한다면 (1)이 추가된다면 REQUIRES_UPDATE에서 먼저 타입 체커가 오류를 냅니다.
수동적으로 바꿔줘야 하지만 실수를 하는 경우는 없게 됩니다.

```ts
const REQUIRES_UPDATE: { [k in keyof ScatterProps]: boolean } = {
  xs: true,
  ys: true,
  xRange: true,
  yRange: true,
  color: true,
  onClick: false,
};
```

[k in keyof ScatterProps] 는 REQUIRES_UPDATE 객체는 ScatterProps 와 동일한 속성을 가져야 한다는 정보를 제공합니다. 만약 ScatterProps 속성이 변경된다면 이를 타입체커가 감지해서 오류를 발생시켜줍니다. 이런 방식은 오류를 정확히 잡아냅니다.

```ts
function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
  let k: keyof ScatterProps;
  for (k in oldProps) {
    if (oldProps[k] !== newProps[k] && REQUIRES_UPDATE[k]) {
      return true;
    }
  }
  return false;
}
```
