import { createSlice } from "@reduxjs/toolkit";
import { MarketState } from "../../types/marketSliceTypes";

const initialState: MarketState = {
    availableMarkets: {},
    selectedMarketId: null,
    selectedMarketCurrency: null,
    selectedMarketLanguage: null,
    jamaicanTime: null,
    error: false,
  };

const marketSlice = createSlice({
    name: "getMarkets",
    initialState,
    reducers: {
        marketFetchSuccess : (state, action) => {
            state.availableMarkets = action.payload;
            state.selectedMarketId = action.payload.data.defaultmarket;
        }
    }
})

export const { marketFetchSuccess } = marketSlice.actions;
export default marketSlice.reducer;