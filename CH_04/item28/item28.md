# 유요한 상태만 표현하는 타입을 지향하기

- 효과적으로 타입을 설계하려면, 유효한 상태만 표현할 수 있는 타입을 만들어 내는 것이 가장 중요하다.
  - 유효한 상태와 무효한 상태를 둘 다 표현하는 타입은 혼란을 초래하기 쉽고 오류를 유발한다.
  - 유효한 상태만 표현하는 타입을 지향해야 한다.
    - 코드가 길어지거나 표현하기 어렵지만 결국은 시간을 절약하고 고통을 줄일 수 있다.

---

```ts
interface State {
  pageText: string;
  isLoading: boolean;
  error?: string;
}

function renderPage(state: State) {
  if (state.error) {
    return `Error! Unable to load${curretnPage} : ${state.error}`;
  } else if (state.isLoading) {
    return `Loading ${currentPage}...`;
  }
  return `<h1>${currentPage}</h1> \n ${state.pageText}`;
}
```

코드를 보면 isLoading이 참이고 동시에 error 값이 존재한다면 로딩 중인 상태인지
오류가 발생한 상태인지 명확히 구분이 불가하다.

즉 필요한 정보가 부족하기 때문이다.

해당코드를 개선하면 아래와 같다.

```ts
interface RequestPending {
  state: "pending";
}

interface RequestError {
  state: "error";
  error: string;
}

interface RequestSuccess {
  state: "ok";
  pageText: string;
}

type RequestState = RequestPending | RequestError | RequestSuccess;

interface State {
  currentPage: string;
  requests: { [page: string]: RequestState };
}

function renderPage(state: State) {
  const { currentPage } = state;
  const requestState = state.requests[currentPage];
  switch (requestState.state) {
    case "pending":
      return `Loading ${currentPage}...`;
    case "error":
      return `Error! Unable to load ${curretnPage} : ${requestState.error}`;
    case "ok":
      return `<h1>${currentPage}</h1> \n ${requestState.pageText}`;
  }
}

async function changePage(state: State, newPage: string) {
  state.requests[newPage] = { state: "pending" };
  state.currentPage = newPage;
  try {
    const res = await fetch(getUrlForPage(newPage))
    if(!res.ok) {
      throw new Error(`Error! Unable to load ${newPage} : ${res.statusText}`;)
    }
    const pageText = await res.text();
    state.requests[newPage] = {state:'ok', pageText}
  } catch(e) {
    state.requests[newPage] = {state:'error', error: "" + e};
  }
}
```
