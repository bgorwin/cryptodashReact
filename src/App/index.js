import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
// import styled from 'styled-components';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';


class App extends Component {
  render() {
    return(
      <AppLayout>
        <AppProvider>
          <AppBar />
          <WelcomeMessage />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
