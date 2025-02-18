import MockAdapter from "axios-mock-adapter";
import { PokemonMock } from "./v2/pokemon";

export const PokeApiMock = (mock: MockAdapter) => {
    PokemonMock(mock);
};