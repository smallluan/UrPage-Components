export const __dealCss__ = (str) => {
  let arr = []
  // 将空格用自定义空格占位符进行占位
  let _str = appendTagBlank(str)
  // 去掉所有的纯空格
  let strList = _str.split('\n').filter((item) => !(/^[ ]*$/.test(item)))
  // 去除掉每个元素前后的所有空格
  const res = strList.map(item => {
    return dealEachClass(item.split('\n'))
  })
  return res
}

// 处理每一个类
function dealEachClass (str) {
  let res = []
  str.forEach((item, index) => {
    if (item === '') {
      res.push({ content: '\n', class: '' })
    } else if (item === '.') {
      res.push({ content: item, class: 'css-dot' })
    } else if (item === '{' || item.indexOf('}') !== -1) {
      res.push({ content: item, class: 'css-braces' })
    } else if (item === ':') {
      res.push({ content: item, class: 'css-colon' })
    } else if (index !== str.length - 1 && str[index + 1] === ':') {
      res.push({ content: item, class: 'css-key' })
    } else if (index !== 0 && str[index - 1] === ':') {
      res.push({ content: item, class: 'css-value' })
    } else if (item.indexOf('.') !== -1) {
      res.push(...dealEachClass(splitMethodCall(item, '.')))
    } else if (item.indexOf('{') !== -1) {
      let classNameIndex = -1
      let list = splitMethodCall(item, '{')
      list.forEach((item, index) => {
        if (/[a-zA-Z0-9]/.test(item)) {
          res.push({ content: item, class: 'css-class-name' })
          classNameIndex = index
        }
      })
      list.splice(classNameIndex, 1)
      res.push(...dealEachClass(list))
    } else if (item.indexOf(':') !== -1) {
      console.log(splitMethodCall(item, ':'))
      res.push(...dealEachClass(splitMethodCall(item, ':')))
    } else {
      res.push({ content: item, class: '' })
    }
  })
  return res
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