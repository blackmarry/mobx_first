import React from 'react';
import { observer } from 'mobx-react';
import Button from '@material-ui/core/Button';

import Grid from './Card';

export default observer(
	class Pokemon extends React.Component{
		componentWillMount() {
			this.props.store.loadPokemons();
		}

		pokemon = ({pkdx_id, name, types, image_url}) =>
			<div key={pkdx_id}>
				<Grid pokemonId={pkdx_id} name={name} types={types} imgUrl={image_url}/>
			</div>;

		render() {
			if (this.props.store.loading) {
				return(
					<div>loading...</div>
				);
			}

			return (
				<div>
					<Button onClick={this.props.store.loadPokemons} size="small">Load pokemon</Button>
					{this.props.store.pokemons.map(this.pokemon)}
				</div>
			);
		}
	}	
);