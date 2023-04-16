import {useAppDispatch} from './index';
import {useEffect, useRef} from 'react';
import {fetchFavorites} from '../store/api-actions';

export default function useFetchFavorites() {
  const dispatch = useAppDispatch();
  const isFetched = useRef<boolean>(false);
  useEffect(() => {
    if (!isFetched.current){
      dispatch(fetchFavorites());
      isFetched.current = true;
    }
  });
}
