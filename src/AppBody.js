import React from 'react';
import { 
	Grid, Paper, Typography, Drawer, AppBar, 
	Toolbar, List, ListItem, ListItemIcon, ListItemText, 
	IconButton, Hidden, Divider, Menu, MenuItem, MenuList 
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import HubIcon from '@material-ui/icons/DeviceHub';
import NotificationIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import PeopleIcon from '@material-ui/icons/People';
import HelpIcon from '@material-ui/icons/Help';


import WizardStepper from './Stepper';
import Dashboard from './Dashboard';
import ControlCenter from './ControlCenter';
import SceneSettings from './SceneSettings';


const drawerWidth = 240;

const styles = theme => ({
	root: {
		flexGrow: 1,
		height: 'auto',
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	navIconHide: {
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		[theme.breakpoints.up('md')]: {
			position: 'relative',
		},
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
	},
});

class AppBody extends React.Component {

	state = {
		mobileOpen: false,
		auth: true,
		anchorEl: null,
	};

	handleDrawerToggle = () => {
		this.setState(state => ({ mobileOpen: !state.mobileOpen }));
	};

	handleChange = (event, checked) => {
		this.setState({ auth: checked });
	};

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {

		const { classes, theme } = this.props
		const { mobileOpen } = this.state

		const { auth, anchorEl } = this.state;
		const open = Boolean(anchorEl);

		const leftDrawer = (
			<div>
				<div className={classes.toolbar} />
				<Divider />
				<List>
					<ListItem>
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText
						primary="Dashboard"
						/>
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem>
						<ListItemIcon>
							<AppsIcon />
						</ListItemIcon>
						<ListItemText
						primary="Control Center"
						/>
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem>
						<ListItemIcon>
						<PeopleIcon />
						</ListItemIcon>
						<ListItemText
						primary="User Access"
						/>
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem>
						<ListItemIcon>
						<HelpIcon />
						</ListItemIcon>
						<ListItemText
						primary="Help"
						/>
					</ListItem>
				</List>
			</div>
		);

		return(
			<Grid container>
				<Grid item xs={12}>
					<div className={classes.root}>
						<AppBar className={classes.appBar} position="fixed">
							<Toolbar>
								<IconButton
								color="inherit"
								aria-label="Open drawer"
								onClick={this.handleDrawerToggle}
								className={classes.navIconHide}
								>
									<MenuIcon />
								</IconButton>
								<Typography variant="title" color="inherit" noWrap>
									Dashboard
								</Typography>

								<div style={{ right: 10, display: "flex", position: "absolute" }}>
									<IconButton
									onClick={this.handleMenu}
									color="inherit"
									>
										<HubIcon />
									</IconButton>
									<IconButton
									onClick={this.handleMenu}
									color="inherit"
									>
										<NotificationIcon />
									</IconButton>
									<IconButton
									onClick={this.handleMenu}
									color="inherit"
									>
										<PersonIcon />
									</IconButton>
									<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={open}
									onClose={this.handleClose}
									>
										<MenuItem onClick={this.handleClose}>Profile</MenuItem>
										<MenuItem onClick={this.handleClose}>My account</MenuItem>
									</Menu>
								</div>
							</Toolbar>
						</AppBar>

						<Hidden mdUp>
							<Drawer
							variant="temporary"
							anchor="left"
							open={this.state.mobileOpen}
							onClose={this.handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper,
							}}
							ModalProps={{
								  keepMounted: true, // Better open performance on mobile.
								}}
							>
								{leftDrawer}
							</Drawer>
						</Hidden>

						<Hidden smDown implementation="css">
							<Drawer
							variant="permanent"
							open
							>
								{leftDrawer}
							</Drawer>
						</Hidden>

						<main className={classes.content} style={{ marginLeft:drawerWidth, marginLeft:drawerWidth }}>
							<div className={classes.toolbar} />

							<ControlCenter classes={classes} />

							<Dashboard classes={classes} />

							<SceneSettings />

							<WizardStepper />
						</main>

					</div>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles) (AppBody);