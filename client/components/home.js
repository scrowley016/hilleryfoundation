import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <img src="sweep.gif" height="300em" width="500em" />
        <h2> Only 400 Tickets Will be Sold!</h2>
        <h2>Grand Prize $10,000!</h2>
        <Link to="form">
          <img src="clickhere.png" width="350em" height="150em" />
        </Link>
      </div>
    )
  }
}
