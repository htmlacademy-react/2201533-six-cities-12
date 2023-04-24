import {changeCity, cityProcess} from './city-process';
import {CITIES, DEFAULT_CITY_INDEX} from '../cities';
import {getRandomInt} from '../../utils/random';

describe('Reducer: cityProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(cityProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({cityIndex: DEFAULT_CITY_INDEX, cities: CITIES});
  });
  it('should assign the received value to the index of the city', () => {
    const state = {cityIndex: DEFAULT_CITY_INDEX, cities: CITIES};
    const index = getRandomInt(0, state.cities.length - 1);
    expect(cityProcess.reducer(state, changeCity(index)))
      .toEqual({cityIndex: index, cities: CITIES});
  });
});
