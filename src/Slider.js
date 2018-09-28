import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-compound-slider'
import { withStyles } from '@material-ui/core/styles'
import { Rail, Handle, Track, Tick } from './sliderComponents' // example render components - source below

const style = () => ({
  root: {
    height: 120,
    width: '100%',
  },
  slider: {
    position: 'relative',
    width: '100%',
  },
})

const domain = [0, 100]
const defaultValues = [15, 80]

class TranslationSlider extends Component {
  state = {
    values: defaultValues.slice(),
    update: defaultValues.slice(),
  }

  onUpdate = update => {
    this.setState({ update })
  }

  onChange = values => {
    this.setState({ values })
  }

  render() {
    const { props: { classes }, state: { values, update } } = this

    return (
      <div className={classes.root}>
        <Slider
          mode={2}
          step={5}
          domain={domain}
          className={classes.slider}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={values}
        >
          <Slider.Rail>
            {({ getRailProps }) => <Rail getRailProps={getRailProps} />}
          </Slider.Rail>
          <Slider.Handles>
            {({ handles, getHandleProps }) => (
              <div>
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Slider.Handles>
          <Slider.Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div>
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Slider.Tracks>
          <Slider.Ticks count={10}>
            {({ ticks }) => (
              <div>
                {ticks.map(tick => (
                  <Tick key={tick.id} tick={tick} count={ticks.length} />
                ))}
              </div>
            )}
          </Slider.Ticks>
        </Slider>
      </div>
    )
  }
}

TranslationSlider.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(style)(TranslationSlider)
