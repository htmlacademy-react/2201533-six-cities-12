import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

type PlaceData = {
  id: number;
  price: number;
  type: string;
  title: string;
  isPremium: boolean;
  previewImage: string;
  rating: string;
  bookmark: boolean;
};

type PlacesProps = {
  data: PlaceData[];
  offersCount: number;
};

const placesProps: PlacesProps = {
  data: [
    {
      id: 1,
      price: 120,
      type: 'Apartment',
      isPremium: true,
      rating: '80%',
      title: 'Beautiful & luxurious apartment at great location',
      previewImage: 'img/apartment-01.jpg',
      bookmark: false
    },
    {
      id: 2,
      price: 80,
      type: 'Private room',
      isPremium: false,
      rating: '80%',
      title: 'Wood and stone place',
      previewImage: 'img/room.jpg',
      bookmark: true
    },
    {
      id: 3,
      price: 132,
      type: 'Apartment',
      isPremium: false,
      rating: '80%',
      title: 'Canal View Prinsengracht',
      previewImage: 'img/apartment-02.jpg',
      bookmark: false
    },
    {
      id: 4,
      price: 180,
      type: 'Apartment',
      isPremium: true,
      rating: '100%',
      title: 'Nice, cozy, warm big bed apartment',
      previewImage: 'img/apartment-03.jpg',
      bookmark: false
    },
    {
      id: 5,
      price: 80,
      type: 'Private room',
      isPremium: false,
      rating: '80%',
      title: 'Wood and stone place',
      previewImage: 'img/room.jpg',
      bookmark: true
    }
  ],
  offersCount: 312
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App {... placesProps}/>
  </React.StrictMode>,
);

export type {PlaceData, PlacesProps};
