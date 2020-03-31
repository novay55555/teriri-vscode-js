function getIEVersion () {
  const userAgent = navigator.userAgent 
  const isOpera = userAgent.indexOf('Opera') > -1
  const isIE =
    userAgent.indexOf('compatible') > -1 &&
    userAgent.indexOf('MSIE') > -1 &&
    !isOpera 
  const isEdge =
    userAgent.indexOf('Windows NT 6.1; Trident/7.0;') > -1 && !isIE 
  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    reIE.test(userAgent)
    const fIEVersion = parseFloat(RegExp['$1'])

    return fIEVersion
  } else if (isEdge) {
    return 12
  } else {
    return -1 
  }
}
