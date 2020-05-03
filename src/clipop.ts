import makeParams from './makeParams'
import makeOptions from './makeOptions'

/**
 * clipop - https://github.com/francoisrv/cliopt
 * Utility to parse cli options into a JSON object
 * @param rest {string[]} input to be parsed
 * @example clipop('--foo', 'bar') => { "foo": "bar" }
 * @returns JSON object
 */
export default function clipop<T extends any>(...rest: string[]): T {
  const params = makeParams(...rest)
  return makeOptions(...params)
}
