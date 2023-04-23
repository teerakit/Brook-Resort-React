import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Brook Resort</title>
        <meta property="og:title" content="Contact - Brook Resort" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Contact
