import { extendObservable, action, runInAction } from 'mobx';

export default extendObservable(this, {

	pokemons: [],
	loading: false,
	loadPokemons: action(async () => {
		this.loading = true;
		// fetch data from api, update pokemon
		const response = await fetch('https://gist.githubusercontent.com/npentrel/06c2ad3b38cf4e155244cfb67efb3a9b/raw/2834ebc04b2ecb9153a8e0b96e09496d6e9119e7/pokemon.json');
		const json = await response.json();
		runInAction(() => {
			this.pokemons = json;
		});
		this.loading = false;
	})
});

class Pokemon {
	construct(jsonData) {
		this.pokedexId = jsonData['pkdx_id']
		this.name = jsonData['name']
		this.types = jsonData['types']
		this.imageUrl = jsonData['image_url']
	}
}