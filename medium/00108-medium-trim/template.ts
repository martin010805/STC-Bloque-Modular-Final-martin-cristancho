type Space = ' ' | '\n' | '\t'

type Trim<S extends string> =
  S extends `${Space}${infer Rest}`
    ? Trim<Rest>
    : S extends `${infer Rest}${Space}`
      ? Trim<Rest>
      : S
