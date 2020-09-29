import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <img src="sweep.gif" height="300em" width="500em" />
        <h2>Click Below for More Information</h2>
        <Link className="homelink" to="form">
          2020 Sweepstakes
        </Link>
      </div>
    )
  }
}
