declare global {
  declare type Member<A> = A extends readonly (infer T)[] ? T : never

  interface PageParameters {
    params: {slug: string}
  }
  type SlugParams = {slug?: string}
}

export * from './sanity'
