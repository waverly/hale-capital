// 'use client'
//
// import { useLiveQuery } from '@sanity/preview-kit'
// import { Project } from '@ui'
// import { projectQuery, pageQuery } from '@query'
//
// interface IPreviewProject {
//   project: Sanity.ProjectQueryResult
//   moreProjects?: Sanity.PageQueryResult
//   params: Record<string, string>
// }
//
// export const ProjectPreview = ({
//   project: initialProject,
//   moreProjects: initialMoreProjects,
//   params,
// }: IPreviewProject) => {
//   const [project, loading] = useLiveQuery(initialProject, projectQuery, params)
//   const [moreProjects] = useLiveQuery(initialMoreProjects, pageQuery, {
//     slug: project?.projectType.toLowerCase(),
//   })
//   return (
//     <>
//       {loading && <>Loading…</>}
//       {!loading && <Project project={project} moreProjects={moreProjects} />}
//     </>
//   )
// }
