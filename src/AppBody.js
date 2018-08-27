import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

class AppBody extends React.Component {

	render() {
		return(
			<Grid container>
  			<Grid item xs={2}>
          <Paper style={this.props.styles}>
            Left Collumn
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper style={this.props.styles}>
            Right Collumn
            App
          </Paper>
        </Grid>
      </Grid>
		);
	}
}

export default AppBody;