import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
// import axios from 'axios';
import Scream from '../components/scream/Scream';
import Profile from '../components/profile/Profile';
import ScreamSkeleton from '../util/ScreamSkeleton';

import { connect } from 'react-redux';
import { getScreams } from '../redux/actions/dataActions';

export class home extends Component {
  state = {
    screams: null,
  };
  componentDidMount() {
    this.props.getScreams();
    // axios
    //   .get('/screams')
    //   .then(res => {
    //     // console.log(res.data);
    //     this.setState({ screams: res.data });
    //   })
    //   .catch(err => console.log(err));
  }
  render() {
    const { screams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <ScreamSkeleton />
    );
    // console.log('handle', this.props.user);

    /*
    // let recentScreamsMarkup = this.state.screams ? (
    //   this.state.screams.map(scream => <p>{scream.body} </p>)
    // ) : (
    //   <p>Loading...</p>
    // );
    // const { screams, loading } = this.props.data;
    // let recentScreamsMarkup = !loading ? (
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map(scream => (
        <Scream key={scream.screamId} scream={scream} />
      ))
    ) : (
      <p>Loading...</p>
      // <ScreamSkeleton />
    );
    */

    return (
      <Grid
        container
        spacing={10}
        // spacing={16}
      >
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}
// export default Home;
home.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  data: state.data,
  // user: state.user,
});

export default connect(
  mapStateToProps,
  { getScreams },
)(home);
