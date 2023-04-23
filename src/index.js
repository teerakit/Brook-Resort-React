import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Location from './views/location'
import Contact from './views/contact'
import Gallery from './views/gallery'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Location} exact path="/location" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Gallery} exact path="/gallery" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
