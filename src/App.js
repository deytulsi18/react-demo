import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FooterContainer } from './containers/footer';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello, I am TD</p>
          <a
            className="App-link"
            href="https://deytulsi18.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my website
        </a>
        </header>
      </div>
      <FooterContainer/>
    </>
  );
}

export default App;
