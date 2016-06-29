jest.mock('../../src/components/styles/app.css')
jest.unmock('../../src/components/app')

import React from 'react'
import { shallow } from 'enzyme'

import App from '../../src/components/app'

describe('App', () => {
  // this is not ideal
  it('has an h1 as it\'s child', () => {
    const app = shallow(<App />)

    expect(app.contains(<h1 class='header'>Hello World!</h1>)).toBe(true)
    // expect(app.node.type).toEqual('h1')
    // expect(app.props().className).toEqual('header')
    // expect(app.props().children).toEqual('Hello World!')
  })
})
