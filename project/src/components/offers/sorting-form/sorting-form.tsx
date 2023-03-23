import React, {useState} from 'react';
import {SORTING_VARIANTS} from '../../../consts/sort-consts';
import {useSelector} from 'react-redux';
import {RootState, store} from '../../../store';
import {selectSortingVariant} from '../../../store/actions';

export default function SortingForm(): JSX.Element {
  const [isVisible, setVisible] = useState(false);
  const variant = useSelector((state: RootState) => state.sortingVariant);
  const onClickArrow = (): void => {
    setVisible(!isVisible);
  };
  const onClickUl = (evt: React.MouseEvent<HTMLLIElement>): void => {
    const index: number = parseInt(evt.currentTarget.dataset.index as string, 10);
    if( index !== variant){
      store.dispatch(selectSortingVariant(index));
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
