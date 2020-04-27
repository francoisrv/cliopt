import makeParams from './makeParams'
import makeOptions from './makeOptions'

/**
 * cliopt - https://github.com/francoisrv/cliopt
 * Utility to parse cli options into a JSON object
 * @param rest {string[]} input to be parsed
 * @example cliopt('--foo', 'bar') => { "foo": "bar" }
 * @returns JSON object
 */
export default function cliopt(...rest: string[]) {
  const params = makeParams(...rest)
  return makeOptions(...params)
}
