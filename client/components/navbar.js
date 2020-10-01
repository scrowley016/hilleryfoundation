import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <Link className="homelink" to="home">
      <h1>Judge John D. Hillery Memorial Scholarship Foundation</h1>
    </Link>
    <nav>
      <Link className="link" to="about">
        About Us
      </Link>
      <Link className="link" to="honor">
        Past Honorees
      </Link>
      <Link className="link" to="form">
        2020 Sweepstakes
      </Link>
      <Link className="link" to="contact">
        Contact Us
      </Link>
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
