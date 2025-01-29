/**
 * 在0 ~ 9之间随机生成一个数字
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @param {array | string} excludes 希望排除掉哪些数字
 * 生成更大的数字推荐多次调用后字符串拼接
 */
export function randomInt0_9 (min = 0, max = 9, excludes = []) {

  const excludesType = intParamsTest(min, max, excludes)
  min = Math.max(Math.floor(min), 0)
  max = Math.min(Math.floor(max), 9)

  const num = Math.floor(Math.random() *  (max + 1)) + min

  if (excludesType === 'array') {
    excludes = trimArrayByMinAndMax(min, max, excludes)
    const reList = trimArrayByArray(trimArrayByMinAndMax(min, max, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), excludes) 
    return reList[Math.floor(Math.random() *  reList.length)]
  } else if (excludesType === 'string') {
    // TODOS...
  } else return num
}

const trimArrayByMinAndMax = (min, max, array) => {
  return [...new Set(array)].filter(item => item >= min && item <= max)
}

const trimArrayByArray = (array, excludes) => {
  return [...new Set(array)].filter(item => !excludes.includes(item))
}

// 对于随机生成整数的函数，验证参数是否正确，返回排除参数类型
const intParamsTest = (min, max, excludes, ) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('传入的上下限必须是数字 ')
  }
  let excludesType
  if (excludes instanceof Array) {
    excludes.forEach(item => {
      if (typeof item !== 'number' || item % 1 !== 0) {
        throw new Error('排除数组内的元素必须是整数')
      }
    })
    excludesType = 'array'
  } else if (typeof excludes === 'string') {
    excludesType = 'string'
  } else {
    throw new Error('类型错误：参数 excludes 必须是数组或者字符串')
  }
  return excludesType
}
