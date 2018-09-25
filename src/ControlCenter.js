import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { 
	Grid, Drawer, AppBar, Toolbar, List, ListItem, 
	ListItemIcon, ListItemText, IconButton, Hidden, 
	Divider, Menu, MenuItem, MenuList, TextField,  
	Collapse
} from '@material-ui/core';

import HighlightIcon from '@material-ui/icons/Highlight';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DateRange from '@material-ui/icons/DateRange';

class ControlCenter extends React.Component {

	state = {
		open: true,
	};

	handleClick = () => {
		this.setState(state => ({ open: !state.open }));
	};

	render() {

		const { classes } = this.props

		const rightDrawer = (
			<div>
				<div className={classes.toolbar} /> 
				<List>
					<ListItem >
						{this.state.open ? <ExpandLess button onClick={this.handleClick} /> : <ExpandMore button onClick={this.handleClick} />}
						<ListItemText inset primary="Room 1" />
						<ListItemIcon>
							<HighlightIcon />
						</ListItemIcon>
						<ListItemIcon>
							<DateRange />
						</ListItemIcon>
					</ListItem>
					<Divider />

					<Collapse in={this.state.open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<HighlightIcon />
								</ListItemIcon>
								<ListItemText inset primary="Light 1" />
								<ListItemIcon>
									<SettingsIcon />
								</ListItemIcon>
								<ListItemIcon>
									<MenuIcon />
								</ListItemIcon>
							</ListItem>
							<Divider />
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<HighlightIcon />
								</ListItemIcon>
								<ListItemText inset primary="Light 2" />
								<ListItemIcon>
									<SettingsIcon />
								</ListItemIcon>
								<ListItemIcon>
									<MenuIcon />
								</ListItemIcon>
							</ListItem>
							<Divider />
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<HighlightIcon />
								</ListItemIcon>
								<ListItemText inset primary="Light 3" />
								<ListItemIcon>
									<SettingsIcon />
								</ListItemIcon>
								<ListItemIcon>
									<MenuIcon />
								</ListItemIcon>
							</ListItem>
							<Divider />
						</List>
					</Collapse>
				</List>
			</div>
		);

		return (
			<div>
				<Hidden smDown implementation="css">
					<Drawer
					variant="permanent"
					open
					>
						<div  style={{ position: "inherit", marginTop: 0, right: 0 }}>
							{rightDrawer}
						</div>
					</Drawer>
				</Hidden>

				<Paper style={{ width: 750, height: 300, marginBottom:20, paddingTop: 25 }}>
					<div className="graph">
						<Typography noWrap>{'TODO Blueprint'}</Typography>
					</div>
				</Paper>
			</div>
		);
	}
	
}

export default ControlCenter;