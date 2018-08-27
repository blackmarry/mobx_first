import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 160,
    width: 130,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class GuttersGrid extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {[0].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper} style={{ padding: 20, margin: 10}}>
                  <Typography variant="body2">{this.props.pokemonId}</Typography>
                  <Typography variant="headline">{this.props.name}</Typography>
                  <Typography variant="body2">{this.props.types}</Typography>
                  <img src={this.props.imgUrl} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);