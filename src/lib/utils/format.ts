import dayjs from "dayjs"

export const formatDate = (date: string, format: string) => dayjs(date).format(format)
export const truncate = (value: string, length: number, end: string = "...") =>
  value.length < length ? value : value.substring(0, length) + end
