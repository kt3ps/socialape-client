import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
// import user from './pages/user';
import Navbar from './components/Navbar';
import themeObject from './util/theme';
import AuthRoute from './util/AuthRoute';
const theme = createMuiTheme(themeObject);

axios.defaults.baseURL =
  'https://europe-west1-socialape-d081e.cloudfunctions.net/api';

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log('decodedToken', decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    // store.dispatch(logoutUser());
    window.location.href = '/login';
    authenticated = false;
  } else {
    // store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    authenticated = true;
    // store.dispatch(getUserData());
  }
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={home} />
              <AuthRoute
                exact
                path="/login"
                component={login}
                authenticated={authenticated}
              />
              <AuthRoute
                exact
                path="/signup"
                component={signup}
                authenticated={authenticated}
              />
              />
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
      </div>
    </MuiThemeProvider>
  );
}

export default App;
