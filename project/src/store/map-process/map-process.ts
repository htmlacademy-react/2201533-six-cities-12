import {MapData} from '../../types/state-types';
import {NO_ACTIVE_CARD} from '../../consts/place-card-consts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings';

const initialState: MapData = {
  activeCard: NO_ACTIVE_CARD,
};

export const mapProcess = createSlice({
  name: NameSpace.Map,
  initialState,
  reducers: {
    activateCard: (state, action: PayloadAction<number>) => {
      state.activeCard = action.payload;
    }
  },
});

export const {activateCard} = mapProcess.actions;
