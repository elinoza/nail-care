import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home"

function App() {
  return (
   <Router>
    <Route  path="/"  exact component={Home} />
   </Router>
  );
}

export default App;
