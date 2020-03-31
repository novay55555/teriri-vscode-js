function addEvent(elem, evnt, func) {
  if (elem.addEventListener) elem.addEventListener(evnt, func, false)
  else if (elem.attachEvent) {
    elem.attachEvent('on' + evnt, func)
  } else {
    elem['on' + evnt] = func
  }
}