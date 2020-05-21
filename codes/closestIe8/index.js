function closest(el, selector) {
  if (el.closest && typeof selector === 'string') {
    return el.closest(selector);
  }

  var matchesSelector =
    el.matches ||
    el.webkitMatchesSelector ||
    el.mozMatchesSelector ||
    el.msMatchesSelector ||
    function matches(selector) {
      var element = this;
      var elements = (
        element.document || element.ownerDocument
      ).querySelectorAll(selector);
      var index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return Boolean(elements[index]);
    };

  while (el) {
    if (matchesSelector.call(el, selector)) {
      break;
    }

    el = el.parentElement;
  }

  return el;
}
