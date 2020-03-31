function jqueryAjax (settings) {
  settings = settings || {}

  var _promise = function _promise (opts) {
    return new Promise(function (resolve, reject) {
      opts.retry = opts.retry || settings.retry || {}
      var _opts = {
        success: function success (data) {
          resolve(data)
        },
        error: function error (jqXHR) {
          if (opts.retry.times && opts.retry.times > 0) {
            opts.retry.times = opts.retry.times - 1
            setTimeout(function () {
              _promise(opts).then(function (data) {
                resolve(data)
              })
            }, opts.retry.delay || 3000)
          } else {
            reject(new Error(`${opts.url}: ${jqXHR.statusText || 'api error'}`))
          }
        }
      }
      $.ajax($.extend({}, _opts, opts))
    })
  }

  var get = function get (url, opts) {
    opts = opts || {}
    return _promise($.extend(true, {
      method: 'GET',
      url: url
    }, settings, opts))
  }

  var post = function post (url, data, opts) {
    opts = $.extend(true, {
      method: 'POST',
      url: url,
      headers: {
        'Content-Type': 'application/json'
      }
    }, settings, opts || {})

    if (opts.headers['Content-Type'].indexOf('application/json') > -1 && data) {
      opts.data = JSON.stringify(data)
    } else {
      opts.data = data
    }

    return _promise(opts)
  }

  var ajax = {
    get: get,
    post: post
  }

  return ajax
}