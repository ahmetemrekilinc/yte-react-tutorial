import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import MyDataComponent from './components/MyDataComponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home(){
    return <div>Home</div>;
}

function About(){
    return <div>About</div>;
}

function Child({match}){
    return <div>Child {match.params.id}</div>;
}

function App() {
  let secondName = "hasan";
  return (
    <div className="App">
      <MyComponent name="ahmet emre" >my children</MyComponent>
      <MyComponent name={secondName} ></MyComponent>
      <MyDataComponent></MyDataComponent>
        <Router>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/about">About</Link>
            <br/>
            <Link to="/child/1">Child one</Link>
            <br/>
            <Link to="/child/2">Child two</Link>
            <br/>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/child/:id" component={Child} />

        </Router>

    </div>
  );
}

export default App;
