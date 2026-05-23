type RequiredByKeys<T, K extends keyof T = keyof T> = {
  [P in keyof (Required<Pick<T, K>> & Omit<T, K>)]: (
    Required<Pick<T, K>> & Omit<T, K>
  )[P]
}
