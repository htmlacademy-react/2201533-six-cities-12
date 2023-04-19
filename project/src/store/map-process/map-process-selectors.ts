import {RootState} from '../index';
import {NameSpace} from '../../settings';

export const selectActiveCard = (state: RootState): number => state[NameSpace.Map].activeCard;
