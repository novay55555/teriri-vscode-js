function isSupportCors () {
  return 'withCredentials' in new XMLHttpRequest()
}