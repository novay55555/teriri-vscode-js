function fomatFloat(value, n) {
  var f = Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0) {
    s += '.';
  }
  for (var i = s.length - s.indexOf('.'); i <= n; i++) {
    s += "0";
  }
  return s;
}