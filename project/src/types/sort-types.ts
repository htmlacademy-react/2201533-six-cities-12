import {PlaceData} from './place-data-types';

export type SortOptions = {
  text: string;
  field: keyof PlaceData | null;
  order: number;
  variant: number;
}
