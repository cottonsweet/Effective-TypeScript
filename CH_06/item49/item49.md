# 콜백에서 this에 대한 타입 제공하기

자바스크립트에서의 this 키워드는 매우 혼란스러운 기능이다.

## this ??

- this는 다이나믹 스코프다.
- 호출된 방식에 따라 달라진다.

```ts
class ResetButton {
  constructor() {
    this.onClick = this.onClick.bind(this);
  }
  render() {
    return makeButton({ text: "Reset", onClick: this.onClick });
  }
  onClick() {
    alert(`Reset ${this}`);
  }
}

class ResetButton {
  render() {
    return makeButton({ text: "Reset", onClick: this.onClick });
  }
  onClick = () => {
    alert(`Reset ${this}`); // "this"가 항상 인스턴스를 참조합니다.
  };
}
```

ResetButton 에서 onClick을 호출할 경우 this의 바인딩 문제로 인해
</br>
"Reset이 정의되지 않음" 경고 발생

이로인해 생성자에서 메서드 this에 바인딩, 화살표 함수를 사용하여 해결이 가능함

---

# TS에서의 this 바인딩

```ts
function addKeyListener(
  el: HTMLElement,
  fn: (this: HTMLElement, e: KeyboardEvent) => void
) {
  el.addEventListener("keydown", (e) => fn.call(el, e));
}
```

this 바인딩은 자바스크립트의 고유한 동작이기에
</br>
TS역시 this바인딩을 그대로 모델링한다.

만일 콜백함수에 this가 있다면 매개변수에 this를 추가하고, 콜백 함수를 call로 호출해서 해결이 가능하다.
