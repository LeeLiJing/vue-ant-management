//component导入
export const _import = file => () => import(`@/views/${file}`)

// 文件内容读取
export const requireFile = requireContext => requireContext.keys().map(requireContext)
