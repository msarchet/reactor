jest.mock('../../src/components/styles/app.css')
jest.unmock('../../src/components/app')

import React from 'react'
import { shallow } from 'enzyme'

import App from '../../src/components/app'

describe('App', () => {
  // this is not ideal
  it('is an h1 and has its children', () => {
    const app = shallow(<App />)

    expect(app.contains('Hello World!')).toEqual(true)
    expect(app.node.type).toEqual('h1')
  })
})
