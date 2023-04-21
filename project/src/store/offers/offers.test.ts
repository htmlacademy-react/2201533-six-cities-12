import {offersLoadData} from './offers';

describe('Reducer: offersLoadData', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersLoadData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(defaultState);
  });
});

