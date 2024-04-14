# 타입 주변에 null 값 배치하기

strictNullChecks 속성으로 많은 오류가 표시되게 함으로써 null 값과 관련된 문제점을 찾아내주기 때문에 반드시 필이효ㅏ다.

한 범위안의 변수가 null인 경우와 그렇지 않은 경우보다, 모두 null이거나 전부 null이 아닌 경우로 분명히 구분하는것이 쉽다.

```ts
function extent(nums: number[]) {
  let min, max;
  for (const num of nums) {
    if (!min) {
      min = num;
      max = num;
    } else {
      min = Math.min(min, num);
      max = Math.max(max, num);
    }
  }
  return [min, max];
}
const [min, max] = extent([0, 1, 2]); // ❌ [0,2] 가 아닌 [1,2] 반환
```

- 최솟값이나 최댓값이 0인 경우, 값이 덧씌어짐.
- nums 배열이 비어있으면 [undefined, undefined]를 반환

---

개선 코드

```ts
function extent(nums: number[]) {
  let result: [number, number] | null = null;
  for (const num of nums) {
    if (!result) {
      result = [num, num];
    } else {
      result = [Math.min(num, result[0]), Math.max(num, result[1])];
    }
  }
  return result;
}
const [min, max] = extent([0, 1, 2])!; // 정상 -> null 단언 사용
const range = extent([0, 1, 2]);
if (range) {
  const [min, max] = range; // 정상 -> if문 사용
```
