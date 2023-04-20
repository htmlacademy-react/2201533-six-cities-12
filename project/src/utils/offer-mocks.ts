import {makeFakeRawPlace} from './fake-raw-place';
import {getRandomInt} from './random';
import {getFakeComment} from './mocks';
import {adaptPlace} from '../store/adapter';

export const getFakeDayaFromFetchOffer = () => {
  const id = 3;
  const cityIndex = 2;
  const offer = makeFakeRawPlace(id, cityIndex);
  const near =
      Array.from(new Array(3), (element, index) => makeFakeRawPlace(index, cityIndex));
  const comments =
    Array.from(new Array(getRandomInt(0, 10)), (element, index) => getFakeComment(index));
  return {
    entrance: [offer, near, comments],
    out: {
      offer: adaptPlace(offer, 0),
      near: Array.from(near, (element) => adaptPlace(element, 0)),
      comments: comments
    }
  };
};
