// export const blockTextToString = (
//   block?: {
//     children?: {
//       text: string
//     }[]
//   }[],
//   lineBreakChar: string = '↵ ',
// ) => {
//   return (
//     block?.reduce((a, c, i) => {
//       const text = c.children?.flatMap((c) => c.text).join('') || ''
//       return a + text + (i !== block.length - 1 ? lineBreakChar : '')
//     }, '') || ''
//   )
// }

export const blockTextToString = (block: any): string =>
  block?.reduce((a: any, c: any, i: any) => {
    const text = c.children?.flatMap((c: any) => c.text).join('') || ''
    return a + text + (i !== block.length - 1 ? ' ' : '')
  }, '') || ''
