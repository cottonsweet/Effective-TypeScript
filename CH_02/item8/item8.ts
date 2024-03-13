interface Cylinder {
  radius: number;
  height: number;
}

const Cylinder = (radius: number, height: number) => ({ radius, height });

/**
 * interface type명과 함수명이 현재 서로 동일한데
 * interface Cylinder는 타입이며,
 * const Cylinder는 값으로 쓰이기 때문에 서로의 관계가 다르다.
 *  */

interface Person {
  first: string;
  last: string;
}

const p: Person = { first: "Kim", last: "jin" };

/**
 * p, { first: "Kim", last: "jin" } 해당 부분은 값이며
 * Person < 해당 부분은 타입이다.
 */

function email(p: Person, subject: string, body: string): Response {
  /**
   * email, p, subject, body, -> 값
   * Person, string, string, Response -> 타입
   */
}
