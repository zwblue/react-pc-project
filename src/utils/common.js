export function getRouterParams(url, params) {
  let urlObj = new URLSearchParams(url)
  return urlObj.get(params)
}