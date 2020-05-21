function addEvent(elem, evnt, func) {
  if (elem.addEventListener) return elem.addEventListener(evnt, func, false);

  const wrap = function (e) {
    const event = e || window.event;

    if (!event.preventDefault) {
      event.preventDefault = function () {
        event.returnValue = false;
      };
    }

    if (!event.stopPropagation) {
      event.stopPropagation = function () {
        event.cancelBubble = true;
      };
    }

    if (!event.target) {
      event.target = event.srcElement;
    }

    return func.call(this, event);
  };

  if (elem.attachEvent) {
    elem.attachEvent('on' + evnt, wrap);
  } else {
    elem['on' + evnt] = wrap;
  }
}
