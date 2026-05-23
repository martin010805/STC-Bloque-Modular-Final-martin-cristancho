type Fibonacci<
  T extends number,
  Prev extends any[] = [],
  Curr extends any[] = [1],
  Count extends any[] = [1]
> = T extends 0
  ? 0
  : Count['length'] extends T
    ? Curr['length']
    : Fibonacci<T, Curr, [...Prev, ...Curr], [...Count, 1]>
