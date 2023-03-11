import {PlaceData} from '../types/types';

const OFFERS: PlaceData[] = [
  {
    id: 1,
    price: 120,
    type: 'Apartment',
    isPremium: true,
    rating: 4.8,
    title: 'Beautiful & luxurious apartment at great location',
    previewImage: 'img/apartment-01.jpg',
    bedrooms: 1,
    city: 0,
    isFavorite: false,
    images: [0, 1, 2, 3, 4, 0, 1],
    maxAdults: 1
  },
  {
    id: 2,
    price: 80,
    type: 'Private room',
    isPremium: false,
    rating: 4.2,
    title: 'Wood and stone place',
    previewImage: 'img/room.jpg',
    bedrooms: 3,
    city: 1,
    isFavorite: true,
    images: [0, 1, 2, 3, 4, 0],
    maxAdults: 2
  },
  {
    id: 3,
    price: 132,
    type: 'Apartment',
    isPremium: false,
    rating: 3.8,
    title: 'Canal View Prinsengracht',
    previewImage: 'img/apartment-02.jpg',
    bedrooms: 2,
    city: 2,
    isFavorite: false,
    images: [0, 1, 2, 3, 4],
    maxAdults: 3
  },
  {
    id: 4,
    price: 180,
    type: 'Apartment',
    isPremium: true,
    rating: 3.2,
    title: 'Nice, cozy, warm big bed apartment',
    previewImage: 'img/apartment-03.jpg',
    bedrooms: 2,
    city: 3,
    isFavorite: false,
    images: [0, 1, 2, 3],
    maxAdults: 1
  },
  {
    id: 5,
    price: 80,
    type: 'Private room',
    isPremium: false,
    rating: 2.8,
    title: 'Wood and stone place',
    previewImage: 'img/room.jpg',
    bedrooms: 4,
    city: 0,
    isFavorite: true,
    images: [0, 1, 2],
    maxAdults: 2
  },
  {
    id: 6,
    price: 180,
    type: 'Apartment',
    isPremium: false,
    rating: 2.2,
    title: 'White castle',
    previewImage: 'img/apartment-small-04.jpg',
    bedrooms: 3,
    city: 1,
    isFavorite: true,
    images: [0, 1],
    maxAdults: 3
  }
];

export {OFFERS};
