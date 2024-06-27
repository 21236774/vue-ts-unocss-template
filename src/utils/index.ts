import { isNull } from 'lodash-es'

/**
 * @param input 传入的字符串或者数字
 * @param defind null显示的内容
 * @returns 带千分号的字符串
 */
export function formatToNumber(input: string | number, defind = '/') {
  if (input === '-') return input
  if (isNull(input)) return defind
  if (isNaN(Number(input)) || input === null || input === undefined) {
    return input
  }
  const num = Number(input)
  const parts = num.toString().split('.')

  // 处理整数部分
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  // 如果有小数部分，保留并添加千分位
  const decimalPart = parts.length > 1 ? '.' + parts[1].slice(0, 2) : ''
  if (integerPart.length <= 3) {
    return input
  }
  return integerPart + decimalPart
}

// 设置cookie
export const setCookie = (name: string, value: string, time: number) => {
  const exp = new Date()
  exp.setTime(exp.getTime() + time * 60 * 24 * 60 * 1000) // 这里的time就是天数 escape()编码
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toUTCString()
}

// 获取cookie
export const getCookie = <T>(name: T) => {
  const arr = document.cookie.match(
    new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  )
  // 读取cookie          unescape() 解码操作
  if (arr !== null) return unescape(arr[2])
  return null
}
