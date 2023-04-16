import React, {useState} from 'react';
import {SORTING_VARIANTS} from '../../../consts/sort-consts';
import {store} from '../../../store';
import {setSortingVariant} from '../../../store/city-process/city-process';
import {selectSortingVariant} from '../../../store/city-process/city-process-selectors';
import {useAppSelector} from '../../../hooks';
import {getOffers} from '../../../store/offers/offers-selectors';

export default function SortingForm(): JSX.Element {
  const [isVisible, setVisible] = useState(false);
  const variant = useAppSelector(selectSortingVariant);
  const offers = useAppSelector(getOffers);
  const onClickArrow = (): void => {
    setVisible(!isVisible);
  };
  const onClickUl = (evt: React.MouseEvent<HTMLLIElement>): void => {
    const index: number = parseInt(evt.currentTarget.dataset.index as string, 10);
    if( index !== variant){
      store.dispatch(setSortingVariant({variant: index, offers}));
      setVisible(false);
    }
  };

  return (
    <form className="places__sorting" action="src/components/offers/sorting-form/sorting-form#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onClickArrow}>
        {/* eslint-disable-next-line no-irregular-whitespace */}
        <span>{` ${SORTING_VARIANTS[variant].text}`}</span>
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isVisible ? ' places__options--opened' : ''}`}>
        {
          SORTING_VARIANTS.map((value, index) => (
            <li className={`places__option${variant === index ? ' places__option--active' : ''}`}
              tabIndex={0} data-index={index} onClick={onClickUl} key={value.variant}
            >{value.text}
            </li>
          ))
        }
      </ul>
    </form>
  );
}
