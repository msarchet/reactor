import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles/app.css'

class App extends React.Component {
  render () {
    return (
      <h1 styleName='header'>Hello World!</h1>
    )
  }
}

export default CSSModules(App, styles)
