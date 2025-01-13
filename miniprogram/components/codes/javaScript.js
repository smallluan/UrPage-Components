/**
 * 用于 js 代码的高亮显示
 */

import { getJsSaveWords } from './store.js'

const saveWords = getJsSaveWords()

const saveWordsKeys = getListTargetPorp(saveWords, 'key')

export const __dealJs__ = (str) => {
  let arr = []
  // 将空格用自定义空格占位符进行占位
  let _str = appendTagBlank(str)
  // 去掉所有的纯空格
  let strList = _str.split('\n').filter((item) => !(/^[ ]*$/.test(item)))
  // 去除掉每个元素前后的所有空格
  strList = strList.map((item) => {
    if (item.indexOf('//') === -1) {  // 注释不需要分割
      return trim(item)
    } else {
      return [item]
    }
  })

  strList.forEach((item) => {
    arr.push(dealEachLine(item))
  })  
  
  return arr
}

function dealEachLine (line) {
  let arr = []
  line.forEach((item, index) => {
    let _item = item
    if (/^\&emsp\;/.test) {
      if (item.slice(6) !== '') {
        _item = item.slice(6)
      }
    }
    // 该字是保留字
    if (saveWordsKeys.includes(_item)) {
     const id = saveWordsKeys.indexOf(_item)
      arr.push({ content: item, class: saveWords[id]['class']})
    }
    // 该字不是保留字 -> 变量、数字等
    // 是注释
    else if (item.indexOf('//') !== -1) {
      arr.push({ content: item, class: 'node'})
    }
    // 是数字
    else if (/^[+-]?\d+(\.\d+)?$/.test(item)) {
      arr.push({ content: item,  class: 'number' })
    }
    // 是等号或者比较相等
    else if (['=', '==', '==='].includes(item)) {
      arr.push({ content: item,  class: 'equ' })
    }
    // 是分号
    else if ([';', '；'].includes(item)) {
      arr.push({ content: item,  class: 'colon' })
    }
    // 是逗号
    else if ([',', '，'].includes(item)) {
      arr.push({ content: item, class: 'comma' })
    }
    // 是括号
    else if (['(', ')', '{', '}', '[', ']'].includes(item)) {
      arr.push({ content: item, endfix: '', class: 'bracket' })
    }
    // 该元素前面是成员访问 '.'
    else if (line[index - 1] === '.') {
      arr.push({ content: item, class: 'prop' })
    }
    // 是不是自定义的换行符，空格符号
    else if (/^\<blank\*[0-9]\>$/.test(item)) {
      let times = Number(item.at(-2)) // 只能处理 0-9 个空格
      arr.push({ content: makeBlank(times), class: 'prop' })
    } 
    // 是不是自定义的tab，
    else if (/^\<tab\*[0-9]\>$/.test(item)) {
      let times = Number(item.at(-2)) // 只能处理 0-18 个空格
      arr.push({ content: makeBlank(times * 2), class: 'prop' })
    } 
    // ---------------------------------------------
    // 存在括号 (
    else if (item.split('').indexOf('(') !== -1) {
      const list = splitMethodCall(item, '(')
      dealEachLine(list).forEach(item => {
        arr.push(item)
      })
    }
    // 存在括号 )
    else if (item.split('').indexOf(')') !== -1) {
      const list = splitMethodCall(item, ')')
      dealEachLine(list).forEach(item => {
        arr.push(item)
      })
    }
    // 存在括号 [
    else if (item.split('').indexOf('[') !== -1) {
      const list = splitMethodCall(item, '[')
      dealEachLine(list).forEach(item => {
        arr.push(item)
      })
    }
    // 存在括号 ]
    else if (item.split('').indexOf(']') !== -1) {
      const list = splitMethodCall(item, ']')
      dealEachLine(list).forEach(item => {
        arr.push(item)
      })
    }
    // 存在括号 {
    else if (item.split('').indexOf('{') !== -1) {
      const list = splitMethodCall(item, '{')
      dealEachLine(list).forEach(item => {
        arr.push(item)
      })
    }
    // 存在括号 }
    else if (item.split('').indexOf('}') !== -1) {
      const list = splitMethodCall(item, '}')
      dealEachLine(list).forEach(item => {
        arr.push(item)
      })
    }
    // 字符串
    else if (/^(['"`])(?:(?!\1).)*\1$/.test(item)) {
      arr.push({ content: item,  class: 'string' })
    }
    // 是否存在成员调用 `.`
    else if (item.indexOf('.') !== -1) {
      let str = trim(item)[0]
      dealEachLine(splitMethodCall(str, '.')).forEach(item => {
        arr.push(item)
      })
    }
    // TODOS...
    // 是变量
    else {
      arr.push({ content: item,  class: 'vars' })
    }
  })
  return arr
}

// 去掉每个非纯空格元素的前后空格
function trim (i) {
  if (typeof i === 'string') {
    return i.split(' ').filter(item => item !== '')
  } else {
    return i.filter(item => item !== '')
  }
}

// 将数组中每个对象的某个元素全部提取出来组成一个新的数组
function getListTargetPorp (list, key) {
  return list.map((item) => {
    return item[key]
  })
}

// 将字符串按 target 分割 
function splitMethodCall(str, target) {
  let list = ['']
  let j = 0
  for (let i = 0; i < str.length; i ++) {
    if ( str[i] !== target) {
      list[j] += str[i]
    } else {
      list[++j] = target
      list[++j] = ''
    }
  }
  return trim(list)
}

// 制造空格
function makeBlank (times) {
  let str = ''
  while (times !== 0) { str += '&ensp;'; times -- }
  return str
}

function appendTagBlank (str) {
  let newStr = ''
  for (let i = 0; i < str.length; i ++) {
    if (str[i] === ' ' || str[i] === '') {
      newStr += ' '
      newStr += '&ensp;'
    } else {
      newStr += str[i]
    }
  }
  return newStr
}
