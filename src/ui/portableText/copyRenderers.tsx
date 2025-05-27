// import { TypeXLCropped, TypeLCropped, TypeMCropped, TypeSCropped } from './Text'
// import { styled } from '@linaria/react'
// import type { PropsWithChildren } from 'react'
// import Link from 'next/link'
//
// interface ICopyRenderers {
//   text: string
//   className?: string
//   value?: { href: string }
// }
//
// export const copyRenderers = {
//   block: {
//     xLarge: (props: PropsWithChildren) => <TypeXLCropped {...props} />,
//     large: (props: PropsWithChildren) => <TypeLCropped {...props} />,
//     normal: (props: PropsWithChildren) => <TypeMCropped {...props} />,
//     small: (props: PropsWithChildren) => <TypeSCropped {...props} />,
//     // blockquote: (props: PropsWithChildren) => <Blockquote {...props} />,
//   },
//   marks: {
//     em: (props: PropsWithChildren) => <Italic {...props} />,
//     'color-tan': (props: PropsWithChildren) => (
//       <Color className="tan" {...props} />
//     ),
//     'color-blue': (props: PropsWithChildren) => (
//       <Color className="blue" {...props} />
//     ),
//     'color-light-blue': (props: PropsWithChildren) => (
//       <Color className="light-blue" {...props} />
//     ),
//     'color-neon-green': (props: PropsWithChildren) => (
//       <Color className="neon-green" {...props} />
//     ),
//     'color-neon-blue': (props: PropsWithChildren) => (
//       <Color className="neon-blue" {...props} />
//     ),
//     'tag-round': (props: PropsWithChildren) => <Tag {...props} />,
//     'tag-square': (props: PropsWithChildren) => (
//       <Tag className="square" {...props} />
//     ),
//     semiOpaque: (props: PropsWithChildren) => <SemiOpaque {...props} />,
//     link: ({ text, value, className, ...props }: ICopyRenderers) =>
//       value?.href.substring(0, 1) === '/' ? (
//         <CopyLink href={value?.href} className={className}>
//           {text}
//         </CopyLink>
//       ) : (
//         <a
//           target="_blank"
//           rel="noreferrer"
//           href={value?.href}
//           className={className}
//         >
//           {text}
//         </a>
//       ),
//   },
//   list: {
//     bullet: (props: PropsWithChildren) => <UnorderedList {...props} />,
//     number: (props: PropsWithChildren) => <OrderedList {...props} />,
//     empty: (props: PropsWithChildren) => <PlainList {...props} />,
//     inline: (props: PropsWithChildren) => <InlineList {...props} />,
//   },
// }
//
// const CopyLink = (props: any) => {
//   return <Link {...props} />
// }
//
// const Italic = styled.em`
//   font-style: italic;
// `
//
// export const Color = styled.span<{ color?: string }>`
//   &.tan {
//     color: var(--tan);
//   }
//   &.blue {
//     color: var(--blue);
//   }
//   &.light-blue {
//     color: var(--light-blue);
//   }
//   &.neon-green {
//     color: var(--neon-green);
//   }
//   &.neon-blue {
//     color: var(--neon-blue);
//   }
// `
//
// const Tag = styled.span`
//   border: 1px solid;
//   border-radius: 15px;
//   padding: 0.4em 0.7em 0.3em 0.7em;
//   &.square {
//     border-radius: 3px;
//   }
// `
//
// const SemiOpaque = styled.span`
//   opacity: 0.6;
// `
//
// const PlainList = styled.ul`
//   margin: 0;
//   li {
//     font-size: var(--typeSizeM);
//     line-height: var(--typeLineM);
//     letter-spacing: var(--typeLeadingM);
//     list-style-type: none;
//   }
// `
//
// const InlineList = styled.ul`
//   margin: 0;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   gap: var(--spaceS) var(--spaceXS);
//
//   li {
//     display: block;
//     font-size: var(--typeSizeM);
//     line-height: var(--typeLineM);
//     letter-spacing: var(--typeLeadingM);
//     list-style-type: none;
//   }
// `
//
// const UnorderedList = styled.ul`
//   margin: 0 0 0 1.8em;
//   padding: 0;
//   li {
//     font-size: var(--typeSizeM);
//     line-height: var(--typeLineM);
//     letter-spacing: var(--typeLeadingM);
//     margin: 0;
//     padding: 0 0 0 0.5em;
//     list-style-type: disc;
//   }
// `
//
// const OrderedList = styled.ol``
