interface Market {
  marketid: string;
  marketname: string;
  description: string;
  arrivalonlyallowed: string;
  departureloungeallowed: string;
  arrivalbundleallowed: string;
  magnaallowed: string;
  giftcartallowed: string;
  prioritypassallowed: string;
  digicelcardallowed: string;
  topupallowed: string;
  image: string;
  line1: string;
  line2: string;
  contact: {
      phone: string;
      email: string;
      skype: string;
  };
  header: {
      facebook: string;
      twitter: string;
  };
  pricelist: PriceList[];
}

interface PriceList {
  airportid: string;
  productid: string;
  image: string;
  lounge: string;
  description: string;
  product: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  promotionprice: string;
  loungeavailable: string;
  coffeeavaiable: string;
  daycareavailable: string;
  foodavailable: string;
  wifiavailable: string;
  baravailable: string;
  spaavailable: string;
  normaladultrate: number;
  normalchildrate: number;
  normalinfantrate: number;
  adultrate: number;
  childrate: number;
  infantrate: number;
  additionalinfo: {
      heading: string;
      details: string[];
  };
}
  
export interface AvailableMarkets {
  data: {
    markets: Market[];
    defaultmarket: string;
  };
}
  
export interface MarketState {
  availableMarkets: AvailableMarkets | null;
  selectedMarketId: string | null;
  selectedMarketCurrency: string | null;
  selectedMarketLanguage: string | null;
  jamaicanTime: string | null;
  error: boolean;
}
  