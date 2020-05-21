function joinURL(url, params) {
  if (!params) return url;
  const separator = url.indexOf('?') === -1 ? '?' : '&';
  const query = Object.entries(params)
    .map(
      ([k, v]) =>
        `${window.encodeURIComponent(k)}=${window.encodeURIComponent(v)}`
    )
    .join('&');
  return `${url}${separator}${query}`;
}
