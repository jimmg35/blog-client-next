export interface IGoogleDriveOwner {
  displayName: string
  kind: string
  me: boolean
  permissionId: string
  emailAddress: string
  photoLink: string
}

export interface IGoogleDriveFile {
  owners: IGoogleDriveOwner[]
  id: string
  name: string
  modifiedTime: string
}

export type ArticleCategory = 'general' | 'gis' | 'review'

export interface IArticleMeta {
  title: string
  description: string
  category: ArticleCategory[]
  modifiedTime: string
}
