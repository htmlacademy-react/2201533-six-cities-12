import {SortOptions} from '../types/sort-types';
import {PlaceData} from '../types/place-data-types';

export const Order = {
  up: 1,
  down: -1
} as const;

const SortFields = {
  price: 'price' as keyof PlaceData,
  rating: 'rating' as keyof PlaceData
};

export enum SortingVariants {
  Default = 0,
  PriceUp = 1,
  PriceDown = 2,
  Rated = 3
};

export const SORTING_VARIANTS: SortOptions[] = [
  {text: 'Popular', field: null, order: 0, variant: SortingVariants.Default},
  {text: 'Price: low to high', field: SortFields.price, order: Order.up, variant: SortingVariants.PriceUp},
  {text: 'Price: high to low', field: SortFields.price, order: Order.down, variant: SortingVariants.PriceDown},
  {text: 'Top rated first', field: SortFields.rating, order: Order.down, variant: SortingVariants.Rated}
];
