// import { styled } from '@linaria/react'
// import { dictionary, breakpoints } from '@/theme'
// import { textCrop } from '@/lib'
// import { type CroppedTypeProps } from './types'
//
// export const TypeXL = styled.div`
//   font-size: var(--typeSizeXL);
//   line-height: var(--typeLineXL);
//   letter-spacing: var(--typeLeadingXL);
// `
//
// export const TypeXLCroppedWrapper = styled.div`
//   font-size: 0px;
//   line-height: 0px;
//   > span {
//     font-size: var(--typeSizeXL);
//     line-height: var(--typeLineXL);
//     letter-spacing: var(--typeLeadingXL);
//     ${textCrop(dictionary['medium'])}
//   }
// `
//
// export const TypeXLCropped = ({
//   className,
//   asTag,
//   ...props
// }: CroppedTypeProps) => (
//   <TypeXLCroppedWrapper className={className}>
//     <Span {...props} as={asTag} />
//   </TypeXLCroppedWrapper>
// )
//
// export const TypeL = styled.div`
//   font-size: var(--typeSizeL);
//   line-height: var(--typeLineL);
//   letter-spacing: var(--typeLeadingL);
// `
//
// export const TypeLCroppedWrapper = styled.div`
//   font-size: 0px;
//   line-height: 0px;
//   > span {
//     font-size: var(--typeSizeL);
//     line-height: var(--typeLineL);
//     letter-spacing: var(--typeLeadingL);
//     ${textCrop(dictionary['medium'])}
//   }
// `
//
// export const TypeLCropped = ({
//   className,
//   asTag,
//   ...props
// }: CroppedTypeProps) => (
//   <TypeLCroppedWrapper className={className}>
//     <Span {...props} as={asTag} />
//   </TypeLCroppedWrapper>
// )
//
// export const TypeM = styled.div`
//   font-size: var(--typeSizeM);
//   line-height: var(--typeLineM);
// `
//
// export const TypeMCroppedWrapper = styled.div`
//   font-size: 0px;
//   line-height: 0px;
//   > span {
//     font-size: var(--typeSizeM);
//     line-height: var(--typeLineM);
//     letter-spacing: var(--typeLeadingM);
//     ${textCrop(dictionary['medium'])}
//   }
// `
//
// export const TypeMCropped = ({
//   className,
//   asTag,
//   ...props
// }: CroppedTypeProps) => (
//   <TypeMCroppedWrapper className={className}>
//     <Span {...props} as={asTag} />
//   </TypeMCroppedWrapper>
// )
//
// export const TypeS = styled.div`
//   font-size: var(--typeSizeS);
//   line-height: var(--typeLineS);
// `
//
// export const TypeSCroppedWrapper = styled.div`
//   font-size: 0px;
//   line-height: 0px;
//   > span {
//     font-size: var(--typeSizeS);
//     line-height: var(--typeLineS);
//     letter-spacing: var(--typeLeadingS);
//     ${textCrop(dictionary['medium'])}
//   }
// `
//
// export const TypeSCropped = ({
//   className,
//   asTag,
//   ...props
// }: CroppedTypeProps) => (
//   <TypeSCroppedWrapper className={className}>
//     <Span {...props} as={asTag} />
//   </TypeSCroppedWrapper>
// )
//
// const Span = styled.span``
//
// /*
// font-family: Basis Grotesque Pro;
// font-size: 15px;
// font-weight: 400;
// line-height: 30px;
// letter-spacing: 0.02em;
// text-align: left;
// */
