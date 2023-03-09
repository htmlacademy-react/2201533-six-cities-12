import {PlaceData} from '../types/types';

const OFFERS: PlaceData[] = [
  {
    id: 1,
    price: 120,
    type: 'Apartment',
    isPremium: true,
    rating: '80%',
    title: 'Beautiful & luxurious apartment at great location',
    previewImage: 'img/apartment-01.jpg',
    bedrooms: 1,
    city: 0,
    isFavorite: false
  },
  {
    id: 2,
    price: 80,
    type: 'Private room',
    isPremium: false,
    rating: '80%',
    title: 'Wood and stone place',
    previewImage: 'img/room.jpg',
    bedrooms: 3,
    city: 1,
    isFavorite: true
  },
  {
    id: 3,
    price: 132,
    type: 'Apartment',
    isPremium: false,
    rating: '80%',
    title: 'Canal View Prinsengracht',
    previewImage: 'img/apartment-02.jpg',
    bedrooms: 2,
    city: 2,
    isFavorite: false
  },
  {
    id: 4,
    price: 180,
    type: 'Apartment',
    isPremium: true,
    rating: '100%',
    title: 'Nice, cozy, warm big bed apartment',
    previewImage: 'img/apartment-03.jpg',
    bedrooms: 2,
    city: 3,
    isFavorite: false
  },
  {
    id: 5,
    price: 80,
    type: 'Private room',
    isPremium: false,
    rating: '80%',
    title: 'Wood and stone place',
    previewImage: 'img/room.jpg',
    bedrooms: 4,
    city: 0,
    isFavorite: true
  },
  {
    id: 6,
    price: 180,
    type: 'Apartment',
    isPremium: false,
    rating: '100%',
    title: 'White castle',
    previewImage: 'img/apartment-small-04.jpg',
    bedrooms: 3,
    city: 1,
    isFavorite: true
  }
];

export {OFFERS};
