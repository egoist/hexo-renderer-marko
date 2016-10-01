const renderer = require('../renderer')

test('main', () => {
  const data = {
    text: '<div>Hello ${data.name}!</div>',
    path: 'xxx.marko'
  }
  return renderer(data, {name: 'egoist'})
    .then(html => {
      expect(html).toBe('<div>Hello egoist!</div>')
    })
})
