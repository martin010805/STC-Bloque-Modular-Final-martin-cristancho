type LengthOfString<S extends string> =
  S extends `${infer _}${infer Rest}`
    ? [...Build<LengthOfString<Rest>>, unknown]['length']
    : 0

type Build<
  N extends number,
  Acc extends unknown[] = []
> = Acc['length'] extends N
  ? Acc
  : Build<N, [...Acc, unknown]>