import {FEATURES, FeaturesPresent} from '../../../setings';
import {OfferFeatures} from '../../../types/types';

export default function Features(props: OfferFeatures): JSX.Element {
  return (
    <ul className="property__features">
      {
        FEATURES.map((elem) => {
          const clasName = `property__feature property__feature--${FeaturesPresent[elem].class}`;
          const nodeText = FeaturesPresent[elem].text.replace('${}', props[elem].toString());
          return (
            <li className={clasName} key={elem}>
              {nodeText}
            </li>
          );
        })
      }
    </ul>
  );
}
