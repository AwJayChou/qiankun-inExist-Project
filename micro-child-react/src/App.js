import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Product from './component/Product';
const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "";
function App() {
  return (
    <div className="App">
      <Router basename={BASE_NAME}>
        <div className="App">
          <Link to="/">Home</Link> |
          <Link to="/About">About</Link> |
          <Link to="/Product">Product</Link>
          <hr/>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/product" component={Product}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
