import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './location.css'

const Location = (props) => {
  return (
    <div className="location-container">
      <Helmet>
        <title>Location - Brook Resort</title>
        <meta property="og:title" content="Location - Brook Resort" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div className="location-stats">
        <div className="location-stat">
          <h1 className="location-text">
            <span>50</span>
            <span>+</span>
          </h1>
          <span className="location-text03">Happy clients</span>
          <span className="location-text04">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="location-stat1">
          <h1 className="location-text05">
            <span>369</span>
          </h1>
          <span className="location-text07">Projects completed</span>
          <span className="location-text08">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="location-stat2">
          <h1 className="location-text09">
            <span>500</span>
            <span>+</span>
          </h1>
          <span className="location-text12">Hours</span>
          <span className="location-text13">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="location-stat3">
          <h1 className="location-text14">
            <span>24/7</span>
          </h1>
          <span className="location-text16">Support</span>
          <span className="location-text17">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Location
