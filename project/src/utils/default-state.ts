import {AuthorizationStatus, NameSpace} from '../settings';
import {makeFakeOffers} from './offers-mocks';
import {SortingVariants} from '../consts/sort-consts';
import {User} from '../types/types';
import {CITIES, DEFAULT_CITY_INDEX} from '../store/cities';
import {NO_ACTIVE_CARD} from '../consts/place-card-consts';
import {Comment, PlaceData} from '../types/place-data-types';

export const defaultState = {
  [NameSpace.User]: {authorizationStatus: AuthorizationStatus.Auth},
  [NameSpace.Offers]: {
    isOffersLoaded: true,
    offers: makeFakeOffers(),
    sortingVariant: SortingVariants.Default,
    isFavorites: [],
    hosts: [] as User[]
  },
  [NameSpace.City]: {cities: CITIES, cityIndex: DEFAULT_CITY_INDEX},
  [NameSpace.Favorites]: {count: 0, favorites: [] as PlaceData[]},
  [NameSpace.Map]: {activeCard: NO_ACTIVE_CARD},
  [NameSpace.Offer]: {
    selectedOffer: null as unknown as PlaceData,
    nearOffers: [] as PlaceData[],
    comments: [] as Comment[]
  }
};
