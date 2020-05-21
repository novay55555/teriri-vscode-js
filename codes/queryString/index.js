function queryString(key, search) {
  search = search || window.location.search;
  search = search.indexOf('?') === 0 ? search.slice(1) : search;
  const array = search.split('&');
  for (let i = 0, l = array.length; i < l; i++) {
    const eqStr = array[i];
    const kv = eqStr.split('=');
    const k = window.decodeURIComponent(kv[0]);
    const v = window.decodeURIComponent(kv[1]);
    if (key === k) {
      return v;
    }
  }
}
