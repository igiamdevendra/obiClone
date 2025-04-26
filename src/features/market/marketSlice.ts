import { createSlice } from "@reduxjs/toolkit";
import { MarketState } from "../../types/marketSliceTypes";
import { RootState } from "../../app/store";

const initialState: MarketState = {
    availableMarkets: null,
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
            state.selectedMarketCurrency = action.payload.data.markets.find((m:any) => m.marketid === action.payload.data.defaultmarket).currencycode ?? "USD";
            state.selectedMarketLanguage = action.payload.data.markets.find((m:any) => m.marketid === action.payload.data.defaultmarket).language ?? "en";
        }
    }
})

export const { marketFetchSuccess } = marketSlice.actions;
export const selectedMarket = (state : RootState) => state.market.availableMarkets?.data?.markets.find((m: any) => m.marketid === state.market.selectedMarketId) ?? null;
export const availableMarkets = (state: RootState) => state.market.availableMarkets;
export default marketSlice.reducer;