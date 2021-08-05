import dayjs from 'dayjs'
import pluralize from 'pluralize'

/**
 * Quick helper to get the most appropriate delta between two dates
 *
 * @param startDate The starting date
 * @param endDate The end date
 * @param unit The unit of time to get the delta of
 * @returns The delta between the given start and end dates
 */
function getDelta(startDate: string, endDate: string | null, unit: dayjs.UnitType): number {
  return (endDate ? dayjs(endDate) : dayjs()).diff(startDate, unit)
}

/**
 * Quick helper to get a formatted period between two dates
 *
 * @param startDate The start date
 * @param endDate The end date
 * @param format The DayJS format string to format the dates as
 * @param separator The separator to join formatted dates with
 * @returns A human-readable period string
 */
export function getPeriod(startDate: string, endDate: string | null, format: string = 'MMM YYYY', separator: string = ' - '): string {
  return [dayjs(startDate).format(format), endDate ? dayjs(endDate).format(format) : null].filter((value) => Boolean(value)).join(separator)
}

/**
 * Quick helper to get human-readable text to describe the duration between two dates
 *
 * @param startDate The start date
 * @param endDate The end date
 * @returns Human-readable text describing the duration between two dates
 */
export function getDuration(startDate: string, endDate: string | null): string {
  const yearDelta = getDelta(startDate, endDate, 'year')
  const yearDuration = yearDelta > 0 ? `${yearDelta} ${pluralize('year', yearDelta)}` : null

  const monthDelta = getDelta(startDate, endDate, 'month') % 12
  const monthDuration = monthDelta > 0 ? `${monthDelta} ${pluralize('month', monthDelta)}` : null

  const duration = [yearDuration, monthDuration].filter((value) => Boolean(value)).join(' ')
  return duration
}
