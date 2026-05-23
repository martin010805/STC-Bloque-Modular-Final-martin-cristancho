type KebabCase<S extends string> =
  S extends `${infer First}${infer Rest}`
    ? Rest extends Uncapitalize<Rest>
      ? `${Lowercase<First>}${KebabCase<Rest>}`
      : `${Lowercase<First>}-${KebabCase<Rest>}`
    : S
