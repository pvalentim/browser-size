var test = require('tape')
var browser = require('../dist/')()


test('should emit events on window resize', function(t) {
  t.plan(2)

  t.ok(browser.on, 'can listen to events')

  browser.on('resize', function() {
    t.pass('event was fired')
  })

  dispatchResize()
})

test('should cache window size', function(t) {
  t.plan(2)

  t.ok(browser.width, 'width is set to ' + browser.width)
  t.ok(browser.height, 'height is set to ' + browser.height)
})

function dispatchResize() {
  evt = document.createEvent('HTMLEvents')
  evt.initEvent('resize', true, true)
  window.dispatchEvent(evt)
}
