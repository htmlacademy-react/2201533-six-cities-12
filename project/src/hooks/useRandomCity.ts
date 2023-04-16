import {useAppSelector} from './index';
import {useEffect, useState} from 'react';
import {selectCities} from '../store/city-process/city-process-selectors';
import {getRandomInt} from '../utils';

export default function useRandomCity() {
  const cities = useAppSelector(selectCities);
  const [city, setCity] = useState(cities[0]);
  useEffect(() => {
    const index = getRandomInt(0, cities.length - 1);
    setCity(cities[index]);
  }, [cities]);
  return city;
}
