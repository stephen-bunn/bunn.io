import dayjs from 'dayjs'
import humanizeDuration, {HumanizerOptions} from 'humanize-duration'


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
export function getDuration(startDate: string, endDate: string | null, options: HumanizerOptions = {}): string {
  const secondsDelta = (endDate ? dayjs(endDate) : dayjs()).diff(startDate)
  const duration = humanizeDuration(secondsDelta, {...{delimiter: ' ', round: true, units: ['y', 'mo']}, ...options})
  return endDate ? duration : `${duration} ago`
}
