import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Products from './components/products'

const App = () => {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={Products}/>
     </Switch>
   </Router>
  )
}

export default App
