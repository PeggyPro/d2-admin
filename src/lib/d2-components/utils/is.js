/**
 * ----------------------------Warning----------------------------
 * These functions are only suitable for this project
 * There is no comprehensive judgment on the special input value
 * It is not applicable to the use environment outside the project
 */

import { colors, sizes, buttonTypes } from './const.js'

/**
 * Check a color name is within the specified range
 * @param {string} color color name
 * @returns boolean
 */
export function isValidColor (color) {
  return colors.includes(color)
}

/**
 * Check a size name is within the specified range
 * @param {string} size size name
 * @returns boolean
 */
 export function isValidSize (size) {
  return sizes.includes(size)
}

/**
 * Check a button type is within the specified range
 * @param {string} type type name
 * @returns boolean
 */
 export function isValidButtonTypes (type) {
  return buttonTypes.includes(type)
}

/**
 * Check if it is String
 * @param {*} value value to check
 * @returns boolean
 */
export function isString (value) {
  return typeof(value) === 'string'
}

/**
 * Check if it is String and not empty
 * @param {*} value value to check
 * @returns boolean
 */
 export function isValuableString (value) {
  return isString(value) && value !== ''
}

/**
 * Check if it is Boolean
 * @param {*} value value to check
 * @returns boolean
 */
export function isBoolean (value) {
  return value === true || value === false
}

/**
 * Check value is a valid number
 * @param {*} value value to check
 */
export function isFinite (value) {
  return Number.isFinite(value)
}

/**
 * Check whether a value is an integer and less than the given value
 * @param {*} value value to check
 * @param {number} max max value
 * @returns boolean
 */
export function isIntegerAndLessThan (value, max) {
  return isFinite(value) && Number.isInteger(value) && value < max
}

/**
 * Check whether a value is an integer and greater than the given value
 * @param {*} value value to check
 * @param {number} min min value
 * @returns boolean
 */
export function isIntegerAndGreaterThan (value, min) {
  return isFinite(value) && Number.isInteger(value) && value > min
}

/**
 * Check that the value is an integer and within the given range
 * @param {*} value value to check
 * @param {number} min min value
 * @param {number} max max value
 * @returns boolean
 */
export function isIntegerAndBetween (value, min, max) {
  return isFinite(value) && Number.isInteger(value) && value >= min && value <= max
}

// export function isDOM (item) {
//   return (typeof HTMLElement === 'function')
//     ? (item instanceof HTMLElement)
//     : (
//       item
//         && (typeof item === 'object')
//         && (item.nodeType === 1)
//         && (typeof item.nodeName === 'string')
//     )
// }