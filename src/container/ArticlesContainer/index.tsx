import React from 'react'
import { google } from 'googleapis'

const getArticleList = async () => {
  // Create a Drive instance
  const drive = google.drive({
    version: 'v3',
    auth: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_KEY
  })
  const folderId = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID

  const res = await drive.files.list({
    q: `'${folderId}' in parents`,
    fields: 'files(name)'
  })
  const files = res.data.files
  console.log(files)
}

const ArticlesContainer = async () => {
  await getArticleList()
  return (
    <div>
      <h1>ArticlesContainer</h1>
    </div>
  )
}

export default ArticlesContainer
