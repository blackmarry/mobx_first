import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

class Header extends React.Component {

	render() {
		return(
			<Grid container>
				<Grid item xs={2}>
	        <Paper style={this.props.styles}>
	          Button for left menu
	        </Paper>
	      </Grid>
	      <Grid item xs={10}>
	        <Paper style={this.props.styles}>
	          Right Header + Badges
	        </Paper>
	      </Grid>
      </Grid>
		);
	}
}

export default Header;