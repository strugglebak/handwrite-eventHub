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
    eventHub.on('xxx', () => {
      called = true
      assert(called === true)
    })
    eventHub.emit('xxx')
  })
})
