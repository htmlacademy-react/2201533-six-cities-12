import {PlaceData} from './types';

export type SortOptions = {
  text: string;
  field: keyof PlaceData | null;
  order: number;
  variant: number;
}
