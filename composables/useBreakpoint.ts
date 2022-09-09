const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

/**
 * Defines the composable returned by the useBreakpoint function.
 *
 * @typedef {function} useBreakpoint
 * @property {{value:boolean}} isSm Observable condition where the viewport width is in the small range and above.
 * @property {{value:boolean}} isMd Observable condition where the viewport width is in the medium range and above.
 * @property {{value:boolean}} isLg Observable condition where the viewport width is in the large range and above.
 * @property {{value:boolean}} isXl Observable condition where the viewport width is in the xLarge range and above.
 * @property {{value:boolean}} is2xl Observable condition where the viewport width is in the xLarge range and above.
 */

let compositionCache

/**
 * Constructs a breakpoint composable that provides observable conditionals for each breakpoint size.
 * Use this composable to limit functionality or rendering of certain layout features to certain viewport sizes
 * outside of what is provided by the CSS based breakpoint mixins.
 *
 * @returns {useBreakpoint} Breakpoint Composable.
 */
export default function useBreakpoint() {
  if (compositionCache) return compositionCache
  compositionCache = {}
  const breakpointRef = (propertyKey, mediaQuery) => () => {
    const mediaQueryMatches = ref(true)
    const mediaQueryResult = shallowReadonly(mediaQueryMatches)

    if (window && 'matchMedia' in window) {
      const matcher = window.matchMedia(mediaQuery)
      mediaQueryMatches.value = matcher.matches

      try {
        matcher.addEventListener('change', ({ matches }) => {
          mediaQueryMatches.value = matches
        })
      } catch (e) {
        // Support Safari users older than v14
        // https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener
        if (typeof matcher.addListener === 'function') {
          matcher.addListener(({ matches }) => {
            mediaQueryMatches.value = matches
          })
        }
      }

      // Update subsequent gets to just return the read-only value
      Object.defineProperty(compositionCache, propertyKey, {
        configurable: false,
        enumerable: true,
        value: mediaQueryResult,
        writable: false,
      })
    }

    return mediaQueryResult
  }

  for (const [breakpointName, breakpointValue] of Object.entries(breakpoints)) {
    const mediaQuery = `screen and (min-width: ${breakpointValue})`
    const propertyKey = `is${
      breakpointName[0].toUpperCase() + breakpointName.slice(1)
    }`
    Object.defineProperty(compositionCache, propertyKey, {
      configurable: true,
      enumerable: true,
      get: breakpointRef(propertyKey, mediaQuery),
    })
  }

  return compositionCache
}

/**
 * Resets the composition. Only for unit tests.
 * @return {void} No return value
 */
export const resetComposition = () => {
  compositionCache = null
}
