export type Value = string | boolean | null | number

export interface Param {
  type: 'regular' | 'option'
  name: string
  value?: Value
}