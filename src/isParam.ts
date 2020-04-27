export default function isParam(a: string) {
  return (/^--/.test(a))
}
