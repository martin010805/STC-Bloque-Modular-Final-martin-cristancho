type PickByType<T, U> = Pick<
  T,
  {
    [K in keyof T]: T[K] extends U ? K : never
  }[keyof T]
>
