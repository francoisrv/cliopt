import { Param } from './types'
import includes from 'lodash.includes'
import isParam from './isParam'

export default function makeParams(...rest: string[]): Param[] {
  const params: Param[] = []

  let skipped: number[] = []

  rest.forEach((a, i) => {
    if (!includes(skipped, i)) {
      const nextIndex = i + 1
      const next = rest[nextIndex]
      const name = a.replace(/^--?/, '')
      const param: Param = { name, type: 'regular' }
      if (isParam(a)) {
        param.type = 'option'
        if (next === '---false') {
          param.value = false
          skipped.push(nextIndex)
        } else if(next === '---true') {
          param.value = true
          skipped.push(nextIndex)
        } else if(next === '---null') {
          param.value = null
          skipped.push(nextIndex)
        } else if (/^----?\d+(\.\d+)?/.test(next)) {
          param.value = Number(next.replace(/^---/, ''))
          skipped.push(nextIndex)
        } else if (!next || isParam(next)) {
          param.value = true
        } else {
          skipped.push(nextIndex)
          param.value = next
        }
      }
      params.push(param) 
    }
  })

  return params
}
