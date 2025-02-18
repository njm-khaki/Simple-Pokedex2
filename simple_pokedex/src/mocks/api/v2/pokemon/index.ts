import { HttpStatusCode } from "axios";
import MockAdapter from "axios-mock-adapter";
import { PokemonIndex, PokemonList } from "../../../../api_response/api/v2/pokemon/PokemonList";
import { GetPokemonListQueryParams } from "./@types";
import { PokemonIndexMock } from "./_index";
import { parseDynamicMockPath } from "../../../SimplePokedexMock";

export const PokemonMock = (mock: MockAdapter) => {
    PokemonIndexMock(mock);

    const POKE_MAX = 9999;

    const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;

    mock.onGet(parseDynamicMockPath(BASE_URL)).reply((config) => {
        console.log(`MOCK GET: ${BASE_URL}`, config);

        const params = config?.params as GetPokemonListQueryParams;

        const start = (params?.offset ?? 0) - (params?.limit ?? 20);
        const end = (params?.offset ?? 0) + (params?.limit ?? 20);

        return [
            HttpStatusCode.Ok,
            {
                count: POKE_MAX,
                next: end <= POKE_MAX 
                    ? `https://pokeapi.co/api/v2/pokemon?offset=${end}&limit=${params?.limit ?? 20}` 
                    : null,
                previous: 0 <= start 
                    ? `https://pokeapi.co/api/v2/pokemon??offset=${start}limit=${params?.limit ?? 20}`
                    : null,
                results: [...Array(params?.limit ?? 20)].map((_, i) => {
                    const index = (params?.offset ?? 0) + i + 1;
                    return {
                        name: `Poke ${index}`,
                        url: `https://pokeapi.co/api/v2/pokemon/${index}`,
                    } as PokemonIndex;
                }) as Array<PokemonIndex>
            } as PokemonList,
        ];
    });
}