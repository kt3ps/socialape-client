import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar className="nav-container">
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Signup
            </Button>
            {/*
                  authenticated ? (
              <Fragment>
                <PostScream />
                <Link to="/">
                  <MyButton tip="Home">
                    <HomeIcon />
                  </MyButton>
                </Link>
                <Notifications />
              </Fragment>
            ) : (
              <Fragment>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/">
                  Home
                </Button>
                <Button color="inherit" component={Link} to="/signup">
                  Signup
                </Button>
              </Fragment>
            ) */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Navbar;
