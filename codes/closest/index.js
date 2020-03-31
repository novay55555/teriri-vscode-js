function closest(el, selector) {
  if (el.closest && typeof selector === 'string') {
    return el.closest(selector)
  }

  const matchesSelector =
    el.matches ||
    el.webkitMatchesSelector ||
    el.mozMatchesSelector ||
    el.msMatchesSelector

  while (el) {
    if (matchesSelector.call(el, selector)) {
      break
    }
    el = el.parentElement
  }
  return el
}