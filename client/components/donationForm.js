import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class Resume extends Component {
  render() {
    return (
      <div>
        <div className="spara">
          <div className="sTitle">
            <h2>Welcome to the 2020 Scholarship Supporters Sweepstakes!</h2>
            <div className="sMoney">
              <img src="money.gif" height="50em" />
              <img src="money.gif" height="50em" />
              <img src="money.gif" height="50em" />
            </div>
          </div>
          <p>
            For over sixty two years the Hillery Memorial Scholarship Foundation
            has enabled young men of Bishop-Timon St. Jude High School to
            receive financial aid to help support their decision to seek a
            Franciscan based education.The continued support of the community
            has provided over $1,000,000 in financial aid.
          </p>
          <p>
            Normally this is the time of year when we would be inviting you to
            the annual event that shares in celebrating Timon’s recognition of
            alumni and friends who give their gifts and talents to further the
            Best that is Western New York. But, because of Covid-19, this is far
            from a normal year.Covid-19 has had a serious negative impact on the
            economy including many of our Timon families and students. Now more
            than ever there is a need for your continued support.
          </p>
          <p>
            This year we are instead hosting the Scholarship Supporters
            Sweepstakes, giving you the chance to support the students, and
            maybe win some money in the process!
          </p>
          <h2>Only 400 tickets will be sold, with a chance to win $10,000!</h2>
          <p>
            If you would like to purchase a ticket and participate in the
            sweepstakes, click the green button below to download the entry
            form. Print out and complete the form and mail with payment to:
            <p>Bishop Timon St. Jude High School</p>
            <p>Attention: The Hillery Foundation</p>
            <p>601 McKinley Pkwy</p>
            <p>Buffalo, NY 14220</p>
          </p>
          <h2>
            Drawing will be held on December 15,2020 at 12:00pm on our Facebook
            Page
          </h2>
          <a href="form.pdf" download="hilleryscholarshipsweepstales">
            <img src="click.gif" height="40%vh" width="40%vw" />
          </a>
          <h2>Good Luck and Thank you for Your Support!</h2>
        </div>
      </div>
    )
  }
}
