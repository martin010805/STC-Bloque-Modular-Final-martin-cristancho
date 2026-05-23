type TupleToNestedObject<T, U> = 
  T extends [infer F extends PropertyKey, ...infer R]
    ? { [K in F]: TupleToNestedObject<R, U> }
    : U
