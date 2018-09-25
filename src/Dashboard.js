import React from 'react';
import { Paper, Typography, TextField } from '@material-ui/core';

class Dashboard extends React.Component {
	
	render() {
		const { classes } = this.props
		
		return (
			<div>
				<Paper style={{ width: 150, height: 50, marginLeft:240, paddingTop: 25, backgroundColor: "lightyellow" }}>
					<div className="shining-lights-number">
						35
					</div>
					<div className="shining-lights-text">
						shining lights
					</div>
				</Paper>

				<Paper style={{ width: 750, height: 300, marginTop:20, paddingTop: 25 }}>
					<div className="graph">
						<Typography noWrap>{'TODO Graph'}</Typography>
					</div>
					<div className="pickers">
						<form className={classes.container} noValidate>
							<TextField
							id="dateFrom"
							label="From date:"
							type="date"
							defaultValue="2017-05-24"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							/>
						</form>
						<form className={classes.container} noValidate>
							<TextField
							id="dateTo"
							label="To date:"
							type="date"
							defaultValue="2017-05-24"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							/>
						</form>
						<form className={classes.container} noValidate>
							<TextField
							id="showingType"
							label="Showing:"
							type="text"
							defaultValue="Day-todo select"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							/>
						</form>
					</div>
				</Paper>
		</div>
	);
  }
	
}

export default Dashboard;