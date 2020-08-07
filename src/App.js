import React, { Component } from 'react';
import Layout from './components/layout/Layout.js'
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[400],
    },
    secondary: {
      main: red[700],
    },
  },
});

export const routes = {
  HOME: '/',
  RECORDINGS: '/recordings',
  SETTINGS: '/settings',
  STATS: '/monitor',
  LOGS: '/logs'
}
class App extends Component {

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Layout/>
        </ThemeProvider>
      </div>
    );
  }
}

export default App