import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <img className="line" src="lines.png" />
          © Copyright 2020, Shannon Crowley and The Hillery Memorial Scholarship
          Foundation. All Rights Reserved.
        </footer>
      </div>
    )
  }
}
