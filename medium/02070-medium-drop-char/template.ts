type DropChar<
  S extends string,
  C extends string
> = S extends `${infer First}${infer Rest}`
  ? First extends C
    ? DropChar<Rest, C>
    : `${First}${DropChar<Rest, C>}`
  : ''
