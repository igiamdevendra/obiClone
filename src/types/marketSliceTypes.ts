export interface Market {
    marketid: string;
    currencycode: string;
    language: string;
    // Add other properties as needed
  }
  
  export interface AvailableMarkets {
    data: {
      markets: Market[];
      defaultmarket: string;
    };
  }
  
  export interface MarketState {
    availableMarkets: AvailableMarkets | {};
    selectedMarketId: string | null;
    selectedMarketCurrency: string | null;
    selectedMarketLanguage: string | null;
    jamaicanTime: string | null;
    error: boolean;
  }
  