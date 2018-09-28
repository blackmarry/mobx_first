import React from 'react';
import {  } from '@material-ui/core';

import Slider from './Slider';

class SceneSettings extends React.Component {
	
	render() {

		return (
			<div style={{ marginBottom: 200, marginTop: 20 }}>
			<Slider />
			</div>
		);
	}
}

export default SceneSettings;