export default function convertUTCtoLocalDate(utcDateString: string) {
  // 將 UTC 字串轉換為 Date 物件
  const utcDate = new Date(utcDateString)

  // 將 UTC 時間轉換為當前使用者時區
  const localDate = new Date(
    utcDate.getTime() + utcDate.getTimezoneOffset() * 60000
  )

  // 提取日期部分
  const localDateString = localDate.toISOString().split('T').at(0)

  return localDateString
}
