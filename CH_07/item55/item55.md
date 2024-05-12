# DOM 계층 구조 이해하기

이번장에서는 DOM의 계층 구조를 파악해보자

```
EventTarget: window, XMLHttpRequest
Node: document, Text, Comment
Element: HTMLElement, SVGElement
HTMLElement: <i>, <b>
```

---

```ts
function handleDrag(eDown: Event) {
  const targetEl = eDown.currentTarget;
  targetEl.classList.add('dragging');
  const dragStart = [eDown.clientX, eDown.clientY];
  const handleUp = (eUp: Event) => {
    targetEl.classList.remove('dragging');
    targetEl.removeEventListener('mouseup', handleUp);
    const dragEnd = [eUp.clientX, eUp.clientY];
    console.log('dx, dy = ', [0, 1].map(i => dragEnd[i] - dragStart[i]));
  }
  targetEl.addEventListener('mouseup', handleUp);
}
```

TS에선 위의 코드에서 많은 에러를 발생시킨다.

targetEL, classList, clientX, clientY 등등
각 Event | null로 추론되고 이벤트 타겟에 classList속성이 없으며
eDown안에 clinetX, Y의 속성이 정의가 되어있지 않기 때문이다.

즉 각 DOM의 계층구조를 좀 더 명확하게 파악하고 Event, Element의 구체적인
타입 정보 사용해야 한다.