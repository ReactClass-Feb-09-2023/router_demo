import './App.css'

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
