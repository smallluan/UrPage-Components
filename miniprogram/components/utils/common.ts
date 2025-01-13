/**
 * 规范化 style
 * @param props 用户传入参数
 * @param excludes 不需要进行规范的字段
 */
export function _style(props: { [key: string]: any }, excludes: string[]):string {
  let res: string = ''
  for (let i in props) {
    if (typeof props[i] === 'object') {
      res += _style(props[i], [])
      continue
    }
    if (['classes', 'styles'].includes(i) || excludes.includes(i)) continue
    let value: string = typeof props[i] === 'string' ? props[i] : props[i].toString()
    res += `--${i}: ${value};`
  }
  const divPos = res.indexOf(';;')
  return divPos === -1 ? res : res.slice(divPos + 2)
}

/**
 * 规范化 class
 * @param props 用户传入参数
 * @param excludes 不需要进行规范的字段
 */
export function _classes(props: {[key: string]: any}, excludes: string[]):string {
  let res: string = ''
  for (let i in props) {
    if (typeof props[i] === 'object') {
      res +=  _classes(props[i], [])
      continue
    }
    if (excludes.includes(i)) continue
    if (props[i] === false)  continue
    if (props[i] === '') continue
    if (['classes', 'styles'].includes(i)) continue
    if (props[i] === true) {
      res += `${i} `
    } else {
      res += `${i}-${props[i]} `
    }
  }
  return res
}
