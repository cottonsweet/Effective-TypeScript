# 유니온의 인터페이스보다는 인터페이스의 유니온을 사용하기

```ts
interface Layer {
  layout: FillLayout | LineLayout | Pointlayout;
  paint: FillPaint | LinePaint | PointPaint;
}
```

layout이 LineLayout 타입이면서 paint 속성이 FillPaint 타입인 것은 말이 되지 않는다.
</br>
이런 조합을 허용하면 오류가 발생하기 쉽고 인터페이스를 다루기가 어렵다.

```ts
interface FillLayer {
  layout: FillLayout;
  paint: FillPaint;
}
interface LineLayer {
  layout: LineLayout;
  paint: LinePaint;
}
interface PointLayer {
  layout: PointLayout;
  paint: PointPaint;
}

type layer = FillLayer | LineLayer | PointLayer;
```

Layer를 나타내는 type 속성을 추가하면 ‘태그’로서 작동하며 어떤 타입의 Layer가 쓰이는지 판단이 가능하며 if문을 통해 범위를 좁히는데도 사용함

---

## 특정 속성을 분리한다는 가정

```ts
// (7) "HP"와 "MP"가 동시에 존재해야 한다고 가정

type BadChampion = {
  name: string;
  // (8) 각자가 독립적임
  HP?: number;
  MP?: number;
};

type GoodChampion = {
  name: string;
  // (9) 각자가 의존적
  stat: { HP?: number; MP?: number };
};
```

- 유니온의 인터페이스 보다는 인터페이스의 유니온 사용하기
