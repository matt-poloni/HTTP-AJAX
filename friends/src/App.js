import React, { Component } from 'react';
import {createGlobalStyle} from 'styled-components';
import './reset.css';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    width: 100vw;
    min-height: 100vh;
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    text-align:center;
  }
`

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <div className="App">
          Hello World
        </div>
      </React.Fragment>
    );
  }
}

export default App;
