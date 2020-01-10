import React from 'react'
import { initGA, logPageView } from './utils/analytics';

import '../styles/index.scss';

import Footer from './footer';


export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return (
      <div className={this.props.className}>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}