'use strict'
const marko = require('marko')

module.exports = (data, locals) => {
  const template = marko.load(data.path, data.text)
  return new Promise((resolve, reject) => {
    template.render(locals, (err, html) => {
      if (err) return reject(err)
      resolve(html)
    })
  })
}
