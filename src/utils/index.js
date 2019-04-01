import Cookies from 'js-cookie'

// 获取cookie
export const getCookies = name => {
  return Cookies.get(name)
}

// 设置cookie
export const setCookies = (name, value) => {
  return Cookies.set(name, value)
}

// 删除cookie
export const removeCookies = name => {
  return Cookies.remove(name)
}

// 获取localStorage
export const getStorage = name => {
  let storage = window.localStorage.getItem(name) || undefined
  if (storage) {
    storage = JSON.parse(storage)
  }
  return storage
}

// 设置localStorage
export const setStorage = (name, data) => {
  if (name && data) {
    window.localStorage.setItem(name, JSON.stringify(data))
  }
}

// 删除localStorage
export const removeStorage = name => {
  if (name) {
    window.localStorage.removeItem(name)
  }
}


// 文件内容读取
export const requireAll = requireContext => requireContext.keys().map(requireContext)

//component导入
export const _import = file => () => import('@/views/' + file);

export const isExternal = path => {
  return /^(https?:|mailto:|tel:)/.test(path)
}

