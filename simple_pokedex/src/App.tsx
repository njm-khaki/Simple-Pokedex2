import './App.css';
import { SimplePokedexMock } from './mocks/SimplePokedexMock';
import PokedexRouter from './routes/PokedexRouter';

// API モックの起動
if (import.meta.env.VITE_USE_POKE_API_MOCK === `true`) {
  SimplePokedexMock();
}

function App() {
  // const [pokemonList, setPokemonList] = useState<PokemonList>({
  //   count: 0,
  //   results: [],
  // });

  // const [pokemon, setPokemon] = useState<Pokemon>({
  //   name: '',
  //   height: 0,
  //   weight: 0,
  //   sprites: {},
  //   types: [],
  //   stats: [],
  //   abilities: [],
  // });

  return (
    <>
      <PokedexRouter />
      {/* <h1>Simple Pokedex2</h1>
      <div className="card">
        <button onClick={async () => {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
            .then((response) => {
              return {
                status: response.status,
                body: response.data as PokemonList,
              } as ApiResponse<PokemonList>;
            });
          if (response.status != HttpStatusCode.Ok || response.body == null) {
            return;
          }
          console.log(response.body);
          setPokemonList(response.body);
        }}>
          GET Pokemon LIST
        </button>
        <p>
          count: {pokemonList.count}
        </p>
        <p>
          next: {pokemonList.next}
        </p>
        <p>
          previous: {pokemonList.previous}
        </p>
        <button onClick={async () => {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${101}`)
            .then((response) => {
              return {
                status: response.status,
                body: response.data,
              } as ApiResponse<Pokemon>
            });

          if (response.body == null || response.status != HttpStatusCode.Ok) {
            return;
          }

          console.log(response.body);
          setPokemon(response.body);
        }}>
          GET Pokemon No. 101
        </button>
        <p>name: {pokemon.name}</p>
        {
          pokemon.sprites.front_default != null &&
          <img src={pokemon.sprites.front_default} />
        }
        <p>
          height: {pokemon.height}
        </p>
        <p>
          weight: {pokemon.weight}
        </p>
        <p>
          abilities
        </p>
        {
          pokemon.abilities.map(
            (ability) => <p>{ability.ability.name}</p>
          )
        }
      </div> */}
    </>
  );
}

export default App;
