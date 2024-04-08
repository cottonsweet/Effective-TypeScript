# 비동기 코드에는 콜백 대신 async 함수 사용하기

ES6 이후에는 promise와 async/await을 이용해서 비동기를 처리한다.

- 콜백보다 프로미스 또는 async/await을 사용하는 이유는 ?
  - 콜백보다 코드의 가독성이 높고 직관적이며 코드 짜기가 쉬움
  - 동기적인 코드흐름으로 개발이 가능하며 타입 추론이 더 쉽다.

```ts
function fetchURL(url: string, cb: (response: any) => void) {
  fetch(url)
    .then((res) => res.json())
    .then((res) => cb(res));
}

const _cache: { [url: string]: any } = {};
function fetchWithCache(url: string, callback: (response: any) => void) {
  if (url in _cache) {
    callback(_cache[url]);
  } else {
    fetchURL(url, (response) => {
      _cache[url] = response;
      callback(response);
    });
  }
}
let requestStatus: "loading" | "success" | "error";
function getUser(userId: string) {
  fetchWithCache(`/user/${userId}`, (response: any) => {
    requestStatus = "success";
  });
  requestStatus = "loading";
}
```

---

```ts
const _cache: { [url: string]: string } = {};
async function fetchWithCache(url: string) {
  if (url in _cache) {
    return _cache[url];
  }
  const response = await fetch(url);
  const text = await response.text();
  _cache[url] = text;
  return text;
}

let requestStatus: "loading" | "success" | "error";
async function getUser(userId: string) {
  requestStatus = "loading";
  const profile = await fetchWithCache(`/user/${userId}`);
  requestStatus = "success";
}
```
