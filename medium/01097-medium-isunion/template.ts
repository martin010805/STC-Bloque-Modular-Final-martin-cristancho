type IsUnion<T, U = T> =
  [T] extends [never]
    ? false
    : T extends any
      ? [U] extends [T]
        ? false
        : true
      : never
