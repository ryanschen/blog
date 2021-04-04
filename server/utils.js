export function formatDate(datetime, fmt) {
  if (!datetime) return
  let date = datetime
  if (typeof datetime === 'string' && datetime.indexOf('T') === -1) {
    date = new Date(datetime.replace(/-/g, '/'))
  } else {
    date = new Date(datetime)
  }
  function padLeftZero(str) {
    return ('00' + str).substr(str.length)
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}
