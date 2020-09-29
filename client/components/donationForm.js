import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class Resume extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="sTitle">
            <h2>Welcome to the 2020 Scholership Supporters Sweepstakes!</h2>
            <div className="sMoney">
              <img src="money.gif" height="50em" />
              <img src="money.gif" height="50em" />
              <img src="money.gif" height="50em" />
            </div>
          </div>
          <p>
            This year, we cannot be together for our annual fundraiser dinner,
            but more than ever the young men of Timon need uot support. This is
            why we decided to hold out first ever scholership sweepstakes!
          </p>
          <h4>Only 400 tickets will be sold, with a chance to win $10,000!</h4>
          <p>
            If you would like to purchase a ticket and participate in the
            sweepstakes, click the green button below to downlod the entry form.
            Complete the form and mail with payment to: We will then mail your
            numbered ticket to you
          </p>
          <h2>Good Luck and Thank you for Your Support!</h2>
        </div>

        <a href="form.pdf" download="hilleryscholershipsweepstales">
          <img src="click.gif" height="40%vh" width="40%vw" />
        </a>
      </div>
    )
  }
}
