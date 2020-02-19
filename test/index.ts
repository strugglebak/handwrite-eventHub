import * as chai from 'chai'
import { describe, it } from 'mocha'
import EventHub from '../src/eventHub'
import * as sinon from 'sinon'
import * as sinonChai from 'sinon-chai'

const assert = chai.assert
chai.use(sinonChai)

describe('eventHub', () => {
  it('是个对象', () => {
    const eventHub = new EventHub()
    assert.isObject(eventHub)
  })
  it('能够 on 以及 emit', () => {
    const eventHub = new EventHub()
    let called = false
    eventHub.on('xxx', (data) => {
      called = true
      assert(called === true)
      assert(data === 'hello')
    })
    eventHub.emit('xxx', 'hello')
  })
  it('能够不订阅事件', done => {
    const eventHub = new EventHub()
    let called = false
    const fn = () => {
      called = true
    }
    eventHub.on('xxx', fn)
    eventHub.off('xxx', fn)
    eventHub.emit('xxx')
    setTimeout(() => {
      assert(called === false)
      done()
    }, 100)
  })
})
