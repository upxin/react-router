import React from 'react'
import { HashRouter as Router, Route } from './react-router-dom'
function App() {
  return <div>
    <Router>
      <Route path='/home' component={Home}/>
      <Route path='/cart' component={Cart}/>
    </Router>
  </div>
}
function Home() {
  return <div>home</div>
}

function Cart() {
  return <div>Cart</div>
}
export default App