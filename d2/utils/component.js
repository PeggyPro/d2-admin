import { customAlphabet } from 'nanoid'
import { kebabCase } from 'lodash-es'
import { pascalCase } from 'd2/utils/string.js'
import { namespace } from './const.js'

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', 10)

/**
 * Format component name
 * @param {string} name simple component name has no prefix
 *                      eg: 'Foo Bar' '--foo-bar--' '__FOO_BAR__' 'foo/bar'
 * @returns {string} component name. eg: 'NamespaceFooBar'
 */
export function makeName (name) {
  return pascalCase(`${namespace}-${name}`)
}

/**
 * Randomly generate a component name
 * @returns {string} component name. eg: 'NamespaceAisjkxuednj'
 */
export function makeRandomName () {
  return makeName(nanoid())
}

/**
 * Format component name by component file url
 * @param {string} url component file url
 * @returns {string} component name. eg: 'NamespaceFooBar'
 */
export function makeNameByUrl (url) {
  const base = 'd2/components/'
  if (import.meta.env.DEV) {
    url = url
      .replace(RegExp(`^${window.location.origin}/${base}(d2/)?`), '')
      .replace(/\?t=\d+$/, '')
      .replace(/(\/index)?\.(vue|js|jsx)$/, '')
  } else {
    url = url
      .replace(RegExp(base), '')
      .replace(/(\/index)?\.(vue|js|jsx)$/, '')
  }
  console.log('makeNameByUrl [url]', url)
  console.log('makeNameByUrl [name]', makeName(url))
  return makeName(url)
}

/**
 * Format component main class name
 * @param {string} name simple component name has no prefix
 *                      eg 'Foo Bar' 'fooBar' '__FOO_BAR__' 'foo/bar'
 * @returns {string} component name. eg: 'namespace-foo-bar'
 */
export function makeClassName (name) {
  return `${namespace}-${kebabCase(name)}`
}
