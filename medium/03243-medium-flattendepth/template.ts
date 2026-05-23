type FlattenDepth<
  T extends any[],
  N extends number = 1,
  C extends any[] = []
> = C['length'] extends N
  ? T
  : T extends [infer F, ...infer R]
    ? F extends any[]
      ? [...FlattenDepth<F, N, [...C, 1]>, ...FlattenDepth<R, N, C>]
      : [F, ...FlattenDepth<R, N, C>]
    : []
