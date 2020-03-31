function renderAttrString (obj) {
  var arr = []

  for (var k in obj) {
    var v = obj[k]

    switch (typeof v) {
    case 'string':
    case 'number':
      arr.push(k + '="' + v + '"')
      break
    case 'object':
      if (Array.isArray(v)) {
        arr.push(k + '="' + v.join(' ') + '"')
      }
      break
    default:
      break
    }
  }

  return arr.join(' ')
}