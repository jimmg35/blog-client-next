import { IGoogleDriveFile } from '@/types/articles'
import React from 'react'
import { google } from 'googleapis'

const getArticleList = async (): Promise<IGoogleDriveFile[]> => {
  const drive = google.drive({
    version: 'v3',
    auth: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_KEY
  })
  const folderId = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID
  const res = await drive.files.list({
    q: `'${folderId}' in parents`,
    fields: 'files(id, name, modifiedTime, owners)'
  })
  const files = res.data.files
  if (!files) return []
  return files as IGoogleDriveFile[]
}

const ArticlesContainer = async () => {
  const articles = await getArticleList()
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <div>{article.name}</div>
          <div>{article.modifiedTime}</div>
          <div>{article.owners[0].displayName}</div>
        </div>
      ))}
    </div>
  )
}

export default ArticlesContainer
