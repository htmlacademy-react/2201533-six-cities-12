import {FEATURES, FeaturesPresent} from '../../../setings';
import {OfferFeatures} from '../../../types/types';

export default function Features(props: OfferFeatures): JSX.Element {
  return (
    <ul className="property__features">
      {
        FEATURES.map((elem) => (
          <li className={`property__feature property__feature--${FeaturesPresent[elem].class}`} key={elem}>
            {FeaturesPresent[elem].text.replace('${}', props[elem].toString())}
          </li>
        ))
      }
    </ul>
  );
}
