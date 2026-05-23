type PercentageParser<A extends string> =
  A extends `${infer Sign}${infer Rest}`
    ? Sign extends '+' | '-'
      ? Rest extends `${infer Num}%`
        ? [Sign, Num, '%']
        : [Sign, Rest, '']
      : A extends `${infer Num}%`
        ? ['', Num, '%']
        : ['', A, '']
    : ['', '', '']
