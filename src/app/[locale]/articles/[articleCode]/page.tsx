// 'use client'
import React from 'react'
import { google } from 'googleapis'
import { MDXRemote } from 'next-mdx-remote/rsc'

// import { useParams } from 'next/navigation'

export default async function RemoteMdxPage({
  params: { articleCode }
}: {
  params: { locale: string; articleCode: string }
}) {
  const res = await fetch(
    `http://202.39.9.102:1180/som-cluster/${articleCode}.mdx`
  )
  let markdown = '404 not found'
  if (res.status === 200) markdown = await res.text()
  return <MDXRemote source={markdown} />
}
