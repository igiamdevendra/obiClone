import { PRODUCTID_ARRIVAL, PRODUCTID_ARRIVALBUNDLE } from "../constants/commonConstants";

export const isObjectEmpty = (obj: Object): boolean => {
    return Object.keys(obj).length === 0;
}

export const getDirectionTranslationKey = (productid: string): string => {
    let translationKey = null;
    switch (productid) {
      case PRODUCTID_ARRIVALBUNDLE:
        translationKey = "arrivalDeparture";
        break;
      case PRODUCTID_ARRIVAL:
        translationKey = "arrival";
        break;
      default:
        translationKey = "departure";
        break;
    }
    return translationKey;
  };

