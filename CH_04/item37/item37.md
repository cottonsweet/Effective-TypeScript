# 공식 명칭에는 상표를 붙이기

구조적 타이핑에 의해서 가끔은 원치 않은 결과가 나오거나 코드가 실행될 수 있다.


```ts
interface Vector2D {
  x: number;
  y: number;
}
function calculateNorm(p: Vector2D) {
  return math.sqrt(p.x * p.x + p.y * p.y);
}
calculateNorm({ x: 3, y: 4 }); 
const vec3D = { x: 3, y: 4, z: 1 };
calculateNorm(vec3D); 
```

위 코드는 구조적 타이핑 관점에선 문제가 없으나,
수학적으로 놓고본다면 2차원 벡터를 사용 해야한다.

이러한 부분을 타입스크립트에서 같은 개념으로 구현하려면 상표(brand)를 사용하면 된다.


```ts
interface Vector2D {
  _brand: "2d";
  x: number;
  y: number;
}
function vec2D(x: number, y: number): Vector2D {
  return { x, y, _brand: "2d" };
}
function calculateNorm(p: Vector2D) {
  return math.sqrt(p.x * p.x + p.y * p.y);
}
calculateNorm(vec2D(3, 4)); 
const vec3D = { x: 3, y: 4, z: 1 };
calculateNorm(vec3D); // error brand 속성 X
```

이러면 2차원 벡터인 타입만 보장 받을 수 있다.

구조적 타이핑으로 인해 오히려 잘못된 결과가 나올 수 있다.
값을 구분하기 위해 공식 명칭이 필요하다면 상표를 붙이는 방법을 고려 해야한다.