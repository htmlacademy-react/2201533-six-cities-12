//import {TypeOffer} from '../setings';
import {PlaceData} from '../types/place-data-types';

const OFFERS: PlaceData[] = [];
//   {
//     id: 1,//12
//     price: 120,
//     isPremium: true,
//     rating: 4.8,
//     title: 'Beautiful & luxurious apartment at great location',
//     previewImage: 'img/apartment-01.jpg',
//     city: 0,
//     isFavorite: false,
//     images: [0, 1, 2, 3, 4, 0, 1],
//     location: {
//       latitude: 48.834610000000005,
//       longitude: 2.335499,
//       zoom: 16
//     },
//     features: {
//       type: TypeOffer.apartment,
//       bedrooms: 1,
//       maxAdults: 1
//     },
//     hostId: 10
//   },
//   {
//     id: 2,//21
//     price: 80,
//     isPremium: false,
//     rating: 4.2,
//     title: 'Wood and stone place',
//     previewImage: 'img/room.jpg',
//     city: 1,
//     isFavorite: true,
//     images: [0, 1, 2, 3, 4, 0],
//     location: {
//       latitude: 50.949361,
//       longitude: 6.976974,
//       zoom: 16
//     },
//     features: {
//       type: TypeOffer.room,
//       bedrooms: 3,
//       maxAdults: 2
//     },
//     hostId: 12
//   },
//   {
//     id: 3,//4
//     price: 132,
//     isPremium: false,
//     rating: 3.8,
//     title: 'Canal View Prinsengracht',
//     previewImage: 'img/apartment-02.jpg',
//     city: 2,
//     isFavorite: false,
//     images: [0, 1, 2, 3, 4],
//     location: {
//       latitude: 50.869557,
//       longitude: 4.332697,
//       zoom: 16
//     },
//     features: {
//       type: TypeOffer.apartment,
//       bedrooms: 2,
//       maxAdults: 3
//     },
//     hostId: 14
//   },
//   {
//     id: 4,//8
//     price: 180,
//     isPremium: true,
//     rating: 3.2,
//     title: 'Nice, cozy, warm big bed apartment',
//     previewImage: 'img/apartment-03.jpg',
//     city: 3,
//     isFavorite: false,
//     images: [0, 1, 2, 3],
//     location: {
//       latitude: 52.35754,
//       longitude: 4.9179759999999995,
//       zoom: 16
//     },
//     features: {
//       type: TypeOffer.apartment,
//       bedrooms: 2,
//       maxAdults: 1
//     },
//     hostId: 16
//   },
//   {
//     id: 5,//18
//     price: 80,
//     isPremium: false,
//     rating: 2.8,
//     title: 'Wood and stone place',
//     previewImage: 'img/room.jpg',
//     city: 0,
//     isFavorite: true,
//     images: [0, 1, 2],
//     location: {
//       latitude: 48.843610000000005,
//       longitude: 2.338499,
//       zoom: 16
//     },
//     features: {
//       type: TypeOffer.apartment,
//       bedrooms: 4,
//       maxAdults: 2
//     },
//     hostId: 18
//   },
//   {
//     id: 6,//23
//     price: 180,
//     isPremium: false,
//     rating: 2.2,
//     title: 'White castle',
//     previewImage: 'img/apartment-small-04.jpg',
//     city: 1,
//     isFavorite: true,
//     images: [0, 1],
//     location: {
//       latitude: 50.951361,
//       longitude: 6.944974,
//       zoom: 16
//     },
//     features: {
//       type: TypeOffer.apartment,
//       bedrooms: 3,
//       maxAdults: 3
//     },
//     hostId: 10
//   },
//   {
//     id: 7,//11
//     price: 196,
//     isPremium: false,
//     rating: 4.6,
//     title: 'Loft Studio in the Central Area',
//     previewImage: 'img/room.jpg',
//     city: 3,
//     isFavorite: false,
//     images: [0, 1, 2, 3],
//     location: {
//       latitude: 52.3909553943508,
//       longitude: 4.85309666406198,
//       zoom: 16
//     },
//     features: {
//       type: TypeOffer.room,
//       bedrooms: 1,
//       maxAdults: 2
//     },
//     hostId: 12
//   },
//   {
//     id: 8,//17
//     price: 431,
//     isPremium: false,
//     rating: 4.9,
//     title: 'House in countryside',
//     previewImage: 'img/apartment-small-04.jpg',
//     city: 3,
//     isFavorite: false,
//     images: [0, 1, 2],
//     location: {
//       latitude: 52.3609553943508,
//       longitude: 4.85309666406198,
//       zoom: 16
//     },
//     features: {
//       type: TypeOffer.apartment,
//       bedrooms: 3,
//       maxAdults: 7
//     },
//     hostId: 14
//   },
//   {
//     id: 9,//26
//     price: 212,
//     isPremium: false,
//     rating: 4.3,
//     title: 'HThe Joshua Tree House',
//     previewImage: 'img/apartment-03.jpg',
//     city: 3,
//     isFavorite: false,
//     images: [0, 1, 2, 3, 4],
//     location: {
//       latitude: 52.3909553943508,
//       longitude: 4.929309666406198,
//       zoom: 16
//     },
//     features: {
//       type: TypeOffer.room,
//       bedrooms: 1,
//       maxAdults: 2
//     },
//     hostId: 16
//   },
//   {
//     id: 10,//28
//     price: 267,
//     isPremium: false,
//     rating: 4.7,
//     title: 'Tile House',
//     previewImage: 'img/apartment-02.jpg',
//     city: 3,
//     isFavorite: false,
//     images: [0, 3, 4],
//     location: {
//       latitude: 52.3809553943508,
//       longitude: 4.939309666406198,
//       zoom: 16
//     },
//     features: {
//       type: TypeOffer.room,
//       bedrooms: 1,
//       maxAdults: 1
//     },
//     hostId: 18
//   },
// ];
//
export {OFFERS};
