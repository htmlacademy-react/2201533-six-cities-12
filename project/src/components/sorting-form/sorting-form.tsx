import React, {useState} from 'react';

export default function SortingForm(): JSX.Element {
  const [isVisible, setVisible] = useState(false);
  const [variant, setVariant] = useState(0);
  const clickArrow = (): void => {
    setVisible(!isVisible);
  };
  const clickUl = (evt: React.MouseEvent<HTMLLIElement>): void => {
    const index: number = parseInt(evt.currentTarget.dataset.index as string, 10);
    if( index !== variant){
      setVariant(index);
      setVisible(false);
    }
  };
  const sortingVariants: string[] = [
    'Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'
  ];
  // eslint-disable-next-line no-console
  console.log(sortingVariants[variant]);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={clickArrow}>
        {/* eslint-disable-next-line no-irregular-whitespace */}
        {` ${sortingVariants[variant]}`}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isVisible ? ' places__options--opened' : ''}`}>
        {
          sortingVariants.map((value, index) => (
            <li className={`places__option${variant === index ? ' places__option--active' : ''}`}
              tabIndex={0} data-index={index} onClick={clickUl} key={value}
            >{value}
            </li>
          ))
        }
      </ul>
    </form>
  );
}
