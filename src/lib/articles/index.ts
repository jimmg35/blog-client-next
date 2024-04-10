// import { IGoogleDriveFile, IMarkDownMeta } from '@/types/articles'
// import { drive_v3, google } from 'googleapis'

// export const getFileContent = async (
//   fileId: string
// ): Promise<{ status: number; content: string }> => {
//   return new Promise(async (resolve, reject) => {
//     const drive = google.drive({
//       version: 'v3',
//       auth: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_KEY
//     })

//     try {
//       const response = await drive.files.get(
//         {
//           fileId: fileId,
//           alt: 'media'
//         },
//         { responseType: 'stream' }
//       )
//       // 將檔案內容存儲在變數中
//       let content = ''
//       response.data
//         .on('data', (chunk) => {
//           content += chunk
//         })
//         .on('end', () => {
//           resolve({ status: 200, content: content })
//         })
//     } catch (e) {
//       console.log(e)
//       reject({ status: 404, content: '404 not found' })
//     }
//   })
// }

// export const getSubFolderFiles = async (
//   subFolders: drive_v3.Schema$File[],
//   drive: drive_v3.Drive
// ) => {
//   const subFoldersContent = []
//   for (let i = 0; i < subFolders.length; i++) {
//     const subFoler = subFolders[i]
//     const sub = await drive.files.list({
//       q: `'${subFoler.id}' in parents`,
//       fields: 'files(id, name, modifiedTime, owners)'
//     })
//     const filesInSubFolder = sub.data.files
//     if (!filesInSubFolder) return []

//     const markdown = filesInSubFolder.find((f) => f.name === 'content.mdx')
//     const meta = filesInSubFolder.find((f) => f.name === 'meta.json')
//     if (!meta || meta.id === null || meta.id === undefined) continue
//     if (!markdown) continue
//     const { content: markdownMeta } = await getFileContent(
//       meta.id ? meta.id : ''
//     )
//     const content = {
//       markdown: markdown as IGoogleDriveFile,
//       meta: JSON.parse(markdownMeta) as IMarkDownMeta,
//       metaId: meta.id
//     }
//     subFoldersContent.push(content)
//   }
//   return subFoldersContent
// }

// export const getArticleList = async () => {
//   const drive = google.drive({
//     version: 'v3',
//     auth: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_KEY
//   })
//   const folderId = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID
//   const res = await drive.files.list({
//     q: `'${folderId}' in parents`,
//     fields: 'files(id, name, modifiedTime, owners)'
//   })
//   const subFolders = res.data.files
//   if (!subFolders) return []
//   const subFolderContents = await getSubFolderFiles(subFolders, drive)
//   return subFolderContents
// }
