/**
 * 用于 js 代码的高亮显示
 */

import { getHtmlSaveWords } from './store.js'

const saveWords = getHtmlSaveWords()

const saveWordsKeys = getListTargetPorp(saveWords, 'key')

export const __dealHtml__ = (str) => {
  let arr = []
  // 将空格用自定义空格占位符进行占位
  let _str = appendTagBlank(str)
  // 去掉所有的纯空格
  let strList = _str.split('\n').filter((item) => !(/^[ ]*$/.test(item)))
  // 去除掉每个元素前后的所有空格
  strList = strList.map((item) => { 
    return trim(item)
  })
  // 统计最大的公共空格数
  let flag = true
  while (flag) {
    strList.forEach((item) => {
      if (item[0] !== '&ensp;') {
        flag = false
      } 
    })
    if (flag) {
      strList = strList.map((item) => {
        return item.slice(1)
      })
    }
  }
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
    // style
    if (_item === 'style') {
      arr.push({ content: item,  class: 'tagKeyWord' })
    }
    // 相等号
    else if (_item === '=') {
      arr.push({ content: item,  class: 'html-equ' })
    }
    else if (_item === 'id') {
      arr.push({ content: item,  class: 'tagKeyWord' })
    }
    else if (_item === 'wx:for') {
      arr.push({ content: item,  class: 'tagKeyWord' })
    }
    else if (_item === 'wx:key') {
      arr.push({ content: item,  class: 'tagKeyWord' })
    }
    else if (_item === '"') {
      arr.push({ content: item,  class: 'tagKeyWord' })
    }
    else if (_item === '{{') {
      arr.push({ content: '{',  class: 'html-bracket-big-front' })
      arr.push({ content: '{',  class: 'html-bracket-big-behinde' })
    }
    else if (_item === '}}') {
      arr.push({ content: '&ensp;}',  class: 'html-bracket-big-behinde' })
      arr.push({ content: '}',  class: 'html-bracket-big-front' })
    }
    // _________________________________________________
    // 该元素是开始标签
    else if (_item[0] === '<') {
      // 未结束标签
      if (_item.at(-1) !== '>') {
        arr.push({ content: item,  class: 'html-label' })
      }
     // 结束标签
     else {
      arr.push({ content: item,  class: 'html-label' })
     }
    }

    // 结束标签
    else if (_item.indexOf('>') !== -1) {
      if (_item.indexOf('/') !== -1) {
        arr.push({ content: '/',  class: 'html-label' })
        arr.push({ content: '>',  class: 'html-label' })
      } else {
        arr.push({ content: '>',  class: 'html-label' })
      }
    }

    // 如果该元素在{{  }}中
    else if (index !== 0 && line[index - 1].indexOf(`{{`) !== -1) {
      arr.push({ content: item,  class: 'html-vars' })
    }

    // 该元素是表达式
    else if (_item.indexOf('=') !== -1) {
      arr.push(...dealEachLine(splitMethodCall(item, '=')))
    }

    // 引号
    else if (_item.indexOf('"') !== -1) {
      arr.push(...dealEachLine(splitMethodCall(item, '"')))
    }
    // 括号 (
    else if (_item.indexOf("(") !== -1) {
      arr.push(...dealEachLine(splitMethodCall(item, '(')))
    }
    // 括号 )
    else if (_item.indexOf("(") !== -1) {
      arr.push(...dealEachLine(splitMethodCall(item, ')')))
    }
    // 括号 [
    else if (_item.indexOf("(") !== -1) {
      arr.push(...dealEachLine(splitMethodCall(item, '[')))
    }
    // 括号 ]
    else if (_item.indexOf("(") !== -1) {
      arr.push(...dealEachLine(splitMethodCall(item, ']')))
    }
    
    // 括号 {
    else if (_item.indexOf("(") !== -1) {
      arr.push(...dealEachLine(splitMethodCall(item, ']')))
    }

    // 括号 }
    else if (_item.indexOf("(") !== -1) {
      arr.push(...dealEachLine(splitMethodCall(item, ']')))
    }

    // 字符串
    else if (index !== 0 && line[index - 1].indexOf('"') !== -1) {
      arr.push({ content: item,  class: 'html-str' })
    }

    // 普通文字
    else {
      arr.push({ content: item,  class: 'html-text' })
    }
  })
  return arr
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