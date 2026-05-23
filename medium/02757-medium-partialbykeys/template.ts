type PartialByKeys<T, K extends keyof T = keyof T> = {
  [P in keyof (Partial<Pick<T, K>> & Omit<T, K>)]: (
    Partial<Pick<T, K>> & Omit<T, K>
  )[P]
}