import dayjs from "dayjs"

/**
 * Format a given date using some given format template.
 * Use of [DayJS formatting](https://day.js.org/docs/en/display/format#list-of-all-available-formats).
 *
 * @param date The date to format.
 * @param format The format string to use for formatting the date.
 * @returns The formatted date.
 */
export const formatDate = (date: string | Date, format: string) => dayjs(date).format(format)

/**
 * Truncate a given string value to a specified length with a given end.
 *
 * @param value The string value to truncate.
 * @param length The maximum length of the value to truncate to (not including `end`).
 * @param end The ending literal for truncation.
 * @returns The truncated string.
 */
export const truncate = (value: string, length: number, end: string = "...") =>
  value.length < length ? value : value.substring(0, length) + end
