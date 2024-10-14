import React from "react"
import BasicLayout from "../layouts/BasicLayout"
import logo from '../logo.svg';


function MainPage(){
    return (
        <BasicLayout>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </BasicLayout>
    );
}

export default MainPage;