'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: 'Jean Saints',
        photo: 'https://avatars2.githubusercontent.com/u/57118447?v=4',
        login: 'jsaints-dev',
        repos: 12,
        followers: 11,
        following: 11
      },
      repos: [{
        name: 'repo',
        link: '#'
      }],
      starred: [{
        name: 'repo',
        link: '#'
      }]
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

export default App
