import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className="abouttitle">About The Scholarship Foundation</div>

        <div className="about">
          <div className="aboutbody1">
            <p>
              In the fall of 1956, the Judge D. Hillery Memorial Scholarship
              Foundation was concived and dedicated by Gerald A. Whalen as a
              living memorial to a great humanitarian and true friend of Bishop
              Timon-St. Jude High School. Taking its cue from the generous
              spirit of the late jurist, The Scholarship Committee confirmed its
              primary objective of furnishing aid to worthy students of Bishop
              Timon-St. Jude High School to assist them in attaining a sound
              parochial education.
            </p>
          </div>
          <div className="aboutbody2">
            <p>
              To Date, over 3,000 students have enjoyed the benefits of
              financial grants-in-aid awarded by the foundation.
            </p>
          </div>

          <div className="aboutbody3">
            <p>
              The Committee of the Memorial Scholarship Foundation is most
              inspired by the acceptance of its objectives and program, which is
              evidenced by community support and generous donations. Current and
              past recipients, along with the Hillery Foundation, owe a debt of
              gratitude to you and the hundreds of other benefactors through
              whose interest and generocity, the work of the Hillery Memorial
              Scholarship Foundation has been made possible.
            </p>
          </div>

          <div className="aboutbody4">
            <p>Current Board Of Directors:</p>
            <p>
              Marge Carroll, Pat Crowley, Maureen Diggins, Neil Farrell, Sheila
              and Daniel Finucane, Jim Hillery, Sue and Ted Overdorf, Thomas J.
              Sullivan, Mary Ellen and Tom Reilly, Karen and Charlie Wilson
            </p>
          </div>
        </div>
      </div>
    )
  }
}
