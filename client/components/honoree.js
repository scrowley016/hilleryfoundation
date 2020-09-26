import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchHonoree} from '../store/honor'

export class Honoree extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchHonoree()
  }

  groupYear

  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          <div className="names">
            {this.props.honoree &&
              this.props.honoree.map(people => <div>{people.name}</div>)}
          </div>
        </div>
      </div>
    )
  }
}
const mapState = state => {
  return {
    honoree: state.honor.honoree
  }
}

const mapDispatch = dispatch => {
  return {
    fetchHonoree: () => dispatch(fetchHonoree())
  }
}

export default connect(mapState, mapDispatch)(Honoree)
