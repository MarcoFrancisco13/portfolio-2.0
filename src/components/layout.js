import React from 'react'

import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
