declare function PromiseAll<T extends readonly any[]>(
  values: readonly [...T]
): Promise<{ [P in keyof T]: Awaited<T[P]> }>;