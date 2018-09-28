import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import AppBody from './AppBody';

const styles = {
	Paper: { padding: 10, margin: 2 }
}

class MainBody extends React.Component {

	render() {

		return (
			<AppBody styles={styles.Paper} />
		);
	}
}

export default MainBody;