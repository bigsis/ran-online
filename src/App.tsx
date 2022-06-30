import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Wrapper from './Wrapper';


function App() {

  return (
    <div className="App">
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    {/*<li className="menu-text">Blog</li>*/}
                    {/*<li><a href="#">One</a></li>*/}
                    {/*<li><a href="#">Two</a></li>*/}
                    {/*<li><a href="#">Three</a></li>*/}
                </ul>
            </div>
        </div>
        <Wrapper/>
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*  <h1>RanOnline</h1>*/}
      </header>
    </div>
  );
}

export default App;
