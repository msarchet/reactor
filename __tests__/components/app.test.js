jest.mock('../../src/components/styles/app.css');
jest.unmock('../../src/components/app');

import React from 'react'
import { findDOMNode } from 'react-dom'
import { renderIntoDocument } from 'react-addons-test-utils'

import App from '../../src/components/app'
import Styles from '../../src/components/styles/app.css'
console.log(Styles)
describe('App', () => {
  it('has an h1 as it\'s child', () => {
    const app = renderIntoDocument(
      <App />
    );

    const appNode = findDOMNode(app);

    expect(appNode.textContent).toEqual('Hello World!');
  });
});
