export {};

type Reverse<T extends any[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : [];

type FlipArguments<T extends (...args: any[]) => any> = (
  ...args: Reverse<Parameters<T>>
) => ReturnType<T>;