import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PokedexPage from '../pages/pokedex/PokedexPage';
import PokemonDetailPage from '../pages/pokemon_detail/PokemonDetailPage';

const PokedexRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokedexPage />} />
        <Route path="/detail" element={<PokemonDetailPage />} />
        <Route path="*" element={<PokedexPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PokedexRouter;
