type MinusOne<T extends number> =
  ParseInt<MinusOneString<`${T}`>>

type MinusOneString<S extends string> =
  S extends `${infer Rest}${infer Last}`
    ? Last extends '0'
      ? `${MinusOneString<Rest>}${'9'}`
      : `${Rest}${DecrementDigit<Last>}`
    : never

type DecrementDigit<D extends string> =
  D extends '1' ? '0' :
  D extends '2' ? '1' :
  D extends '3' ? '2' :
  D extends '4' ? '3' :
  D extends '5' ? '4' :
  D extends '6' ? '5' :
  D extends '7' ? '6' :
  D extends '8' ? '7' :
  D extends '9' ? '8' :
  never

type ParseInt<S extends string> =
  S extends `${infer N extends number}` ? N : never
