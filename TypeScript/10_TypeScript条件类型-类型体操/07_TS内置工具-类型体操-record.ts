interface IKun {
  name: string;
  age: number;
  slogan?: string;
}

// 类型体操
// name | age | slogan
type keys = keyof IKun;
type Res = keyof any; // => number|string|symbol

// 确实keys一定是可以作为key的联合类型
type HYRecord<Keys extends keyof any, T> = {
  [P in Keys]: T;
};

// IKun都变成可选的
type t1 = "上海" | "北京" | "洛杉矶";
type IKuns = HYRecord<t1, IKun>;

const ikuns: IKuns = {
  上海: {
    name: "xxx",
    age: 10,
  },
  北京: {
    name: "yyy",
    age: 5,
  },
  洛杉矶: {
    name: "zzz",
    age: 3,
  },
};

interface IPerson {
  name: string;
  age: number;
  address?: string;
}
type a1 = "a" | "b" | "c";
type t1 = Record<a1, string>;
type t2 = Record<number, string>;
type t3 = Record<a1, IPerson>;

const hhh: t3 = {
  a: {
    name: "1",
    age: 1,
  },
  b: {
    name: "1",
    age: 1,
  },
  c: {
    name: "1",
    age: 1,
  },
};

export {};
