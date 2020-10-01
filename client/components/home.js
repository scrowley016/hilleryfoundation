import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <img src="sweep.gif" height="300em" width="500em" />
        <Link to="form">
          <img src="clickhere.png" width="90%" height="40%" />
        </Link>
      </div>
    )
  }
}
