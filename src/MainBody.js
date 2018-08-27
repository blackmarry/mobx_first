import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Header from './Header';
import AppBody from './AppBody';

const styles = {
	Paper: { padding: 10, margin: 2 }
}

class MainBody extends React.Component {

  render() {

    return (
      <Grid container>
        <Grid item xs={12}>
        	<Header styles={styles.Paper} />
        </Grid>
        <Grid item xs={12}>
        	<AppBody styles={styles.Paper} />
        </Grid>
      </Grid>
    );
  }
}

export default MainBody;