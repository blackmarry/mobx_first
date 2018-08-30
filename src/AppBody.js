import React from 'react';
import { Grid, Paper, Typography, Drawer, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText, IconButton, Hidden, Divider, Menu, MenuItem } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import HubIcon from '@material-ui/icons/DeviceHub';
import NotificationIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import PeopleIcon from '@material-ui/icons/People';
import HelpIcon from '@material-ui/icons/Help';

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

    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const drawer = (
      <div>
        <div className="toolbar" />
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
          <div className="root">
            <AppBar className="appBar">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerToggle}
                  className="navIconHide"
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" noWrap>
                  Dashboard
                </Typography>

                <div>
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
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>

            <Hidden smDown implementation="css">
              <Drawer
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>

            <main className="content">
              <div className="toolbar" />
              <Typography noWrap>{'Something'}</Typography>
            </main>

          </div>

        </Grid>
      </Grid>
		);
	}
}

export default AppBody;