function delegate (root, eventType, selector, fn) {
  root.addEventListener(eventType, function (e) {
    const el = closest(e.target, selector)

    if (el) {
      fn.call(el, e)
    }
  }, false)
}