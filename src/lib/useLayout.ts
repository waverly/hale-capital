// import { create, StateCreator } from 'zustand'
//
// interface LayoutState {
//   projectType?: string
//   setProjectType: (s?: string) => void
//
//   navActive: boolean
//   setNavActive: (a?: boolean) => void
//   toggleActive: () => void
//
//   compressionLevel: number
//   setCompressionLevel: (n: number) => void
// }
//
// const createNavState: StateCreator<LayoutState> = (set) => ({
//   setProjectType: (projectType) => set({ projectType }),
//
//   navActive: false,
//   setNavActive: (navActive) => set({ navActive }),
//   toggleActive: () => set((state) => ({ navActive: !state.navActive })),
//
//   compressionLevel: 80,
//   setCompressionLevel: (compressionLevel) => set({ compressionLevel }),
// })
//
// export default create<LayoutState>(createNavState)
