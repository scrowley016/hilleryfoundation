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

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="names">
          <h2> Thank You to All of our Supporters!</h2>
          <p>
            Listed below are individuals who have shown outstanding support for
            our scholership foundation benefiting the men at Bishop
            Timon-St.Jude. We have honored them at past fundraising dinners, and
            would like to thank them for their dedication to our community and
            thier commitment to excellence.{' '}
          </p>

          {this.props.honoree &&
            this.props.honoree.map(people => (
              <div key={people.id} className="namesList">
                {people.year} - {people.name}
              </div>
            ))}
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
