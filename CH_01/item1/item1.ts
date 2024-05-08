function greet(who: string) {
  // 매개변수 who는 string(문자열) 타입으로 지정한다.
  console.log("Hello", who);
}

greet("Kim"); // Hello Kim

enum Flavor {
  VANILLA = 0,
  CHOCOLATE = 1,
  STRAWBERRY = 2,
}

let flavoer = Flavor.CHOCOLATE;
