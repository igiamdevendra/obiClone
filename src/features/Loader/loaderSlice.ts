import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface LoaderState {
  isLoading: boolean;
}

const initialState: LoaderState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, stopLoading } = loaderSlice.actions;
export const isLoading = (state: RootState) => state.loader.isLoading;
export default loaderSlice.reducer;
