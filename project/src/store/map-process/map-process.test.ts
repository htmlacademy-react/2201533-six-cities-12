import {activateCard, mapProcess} from './map-process';
import {NO_ACTIVE_CARD} from '../../consts/place-card-consts';
import {getRandomInt} from '../../utils/random';

describe('Reducer: mapProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(mapProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({activeCard: NO_ACTIVE_CARD});
  });
  it('should assign the received value to the activeCard', () => {
    const id = getRandomInt(0, 100);
    const state = {activeCard: NO_ACTIVE_CARD};
    expect(mapProcess.reducer(state, activateCard(id)))
      .toEqual({activeCard: id});
  });
});
