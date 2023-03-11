import {CITIES} from '../../mocs/cities';
import {NavLink} from 'react-router-dom';
import {AppRoute} from '../../setings';

const CLASS = 'locations__item-link tabs__item';
const ACTIVE_CLASS = 'tabs__item--active';

const getClassName = ({isActive}: {isActive: boolean}): string => isActive ? `${CLASS} ${ACTIVE_CLASS}` : CLASS;

export default function LocationsTabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={city.name}>
              <NavLink to={`${AppRoute.Root}${city.name}`} className={getClassName}>
                <span>{city.name}</span>
              </NavLink>
            </li>))}
        </ul>
      </section>
    </div>
  );
}
