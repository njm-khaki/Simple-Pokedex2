import { AxiosRequestConfig, HttpStatusCode } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Pokemon } from '../../../../../api_response/api/v2/pokemon/_index/Pokemon';
import {
  matchDynamicPathParameter,
  parseDynamicMockPath,
} from '../../../../SimplePokedexMock';

export const PokemonIndexMock = (mock: MockAdapter) => {
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/:index`;

  mock
    .onGet(parseDynamicMockPath(BASE_URL))
    .reply((config: AxiosRequestConfig) => {
      const [index] = matchDynamicPathParameter(BASE_URL, config.url);
      console.log(`MOCK GET: ${BASE_URL}`, config, index);

      return [
        HttpStatusCode.Ok,
        {
          name: `Poke ${index}`,
          height: Number(index),
          weight: Number(index),
          sprites: {
            front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`,
          },
          types: [
            {
              slot: 1,
              type: {
                name: `type ${index}`,
                url: ``,
              },
            },
          ],
          stats: [
            {
              base_stat: Number(index),
              effort: 0,
              stat: {
                name: `stats${index}`,
                url: ``,
              },
            },
          ],
          abilities: [
            {
              ability: {
                name: `ability${index}`,
                url: ``,
              },
              is_hidden: Number(index) % 2 === 0,
              slot: 0,
            },
          ],
        } as Pokemon,
      ];
    });
};
