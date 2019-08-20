import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
// import user from './pages/user';
import Navbar from './components/Navbar';
import themeObject from './util/theme';
const theme = createMuiTheme(themeObject);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
            {
              // <Route exact path="/users/:handle" component={user} />
              // <Route
              //   exact
              //   path="/users/:handle/scream/:screamId"
              //   component={user}
              // />
            }
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
