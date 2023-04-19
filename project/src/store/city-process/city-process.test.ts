import {cityProcess} from './city-process';
import {CITIES, DEFAULT_CITY_INDEX} from '../cities';
import {NO_ACTIVE_CARD} from '../../consts/place-card-consts';

describe('Reducer: cityProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(cityProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({cityIndex: DEFAULT_CITY_INDEX, cities: CITIES, activeCard: NO_ACTIVE_CARD});
  });
});
