export interface IWebSetting {
  id: string
  websiteTitle: string
  mainTitle: string
  aboutBtnText: string
  layerBtnText: string
  sourceBtnText: string
  reportBtnText: string
  aboutTab: string
  aboutTextHtml: string
  copyRightTab: string
  copyRightTextHtml: string
  howToTab: string
  howToTextHtml: string
}

export type WebSettingsFindOneQuery = {
  ResponseType: IWebSetting
  ParamType: {
    orgCode: string
  }
}

export type WebSettingsUpdateMutation = {
  ResponseType: { message: string }
  ParamType: {
    orgCode: string
    access_token: string
    websiteTitle: string
    mainTitle: string
    aboutBtnText: string
    layerBtnText: string
    sourceBtnText: string
    reportBtnText: string
    aboutTab: string
    aboutTextHtml: string
    copyRightTab: string
    copyRightTextHtml: string
    howToTab: string
    howToTextHtml: string
  }
}
