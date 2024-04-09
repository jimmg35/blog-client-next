// 'use client'
import React from 'react'
import { google } from 'googleapis'
import { MDXRemote } from 'next-mdx-remote/rsc'

const getArticleMdxFile = async (
  articleCode: string
): Promise<{ status: number; content: string }> => {
  return new Promise(async (resolve, reject) => {
    const drive = google.drive({
      version: 'v3',
      auth: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_KEY
    })
    const fileId = '1YX0TAqBrkhja9aiNA3dsFdn98VbtJMTq'

    try {
      const response = await drive.files.get(
        {
          fileId: fileId,
          alt: 'media'
        },
        { responseType: 'stream' }
      )
      // 將檔案內容存儲在變數中
      let markdown = ''
      response.data
        .on('data', (chunk) => {
          markdown += chunk
        })
        .on('end', () => {
          resolve({ status: 200, content: markdown })
        })
    } catch (e) {
      reject({ status: 404, content: '404 not found' })
    }
  })
}

export default async function RemoteMdxPage({
  params: { articleCode }
}: {
  params: { locale: string; articleCode: string }
}) {
  const res = await getArticleMdxFile(articleCode)
  return <MDXRemote source={res.content} />
}
