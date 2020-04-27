import { Param } from './types'
import set from 'lodash.set'

export default function makeOptions(...params: Param[]) {
  const options: any = {}

  for (const param of params) {
    if (param.type === 'option') {
      set(options, param.name, param.value)
    }
  }

  return options
}
