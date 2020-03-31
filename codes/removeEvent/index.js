function removeEvent(elem, type, handler) {
  if (elem.removeEventListener) {
    elem.removeEventListener(type, handler, false)
  } else if (elem.detachEvent) {
    elem.detachEvent('on' + type, handler)
  } else {
    elem['on' + type] = null
  }
}