import BUNDLEPRODUCT from "../assets/bundle_product.jpg";
import ARRIVALPRODUCT from "../assets/arrival_product.jpg";
import DEPARTUREPRODUCT from "../assets/departure_product.jpg";
import ProductCard from "./commonComponents/ProductCard";
import { selectedMarket as currentMarket, availableMarkets as AM } from "../features/market/marketSlice";
import { useSelector } from "react-redux";
import {
  PRODUCTID_ARRIVAL,
  PRODUCTID_DEPARTURE,
  PRODUCTID_ARRIVALBUNDLE,
} from "../constants/commonConstants";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "./commonComponents/Loader";

const Home = () => {
  const selectedMarket = useSelector(currentMarket);
  const priceList = selectedMarket?.pricelist;
  const availableMarkets = useSelector(AM);
  const [loading, setLoading] = useState(false);
  const renderedProducts: string[] = [];
  const { t } = useTranslation("home")

  useEffect(() => {
    setLoading(!availableMarkets)
  }, [availableMarkets])

  return (
    <>
      {loading ? (
        <Loader loading={true} />
      ) : (
        <div className="mx-auto text-center px-4 mt-8">
          <h1 className="font-medium mb-2 underline text-2xl">{t("loungeServices")}</h1>
          <h3 className="text-2xl mb-6">{t("selectYourProduct")}</h3>
  
          <div className="flex justify-center gap-6 flex-wrap">
            {priceList?.map((value) => {
              let productComponent = null;
              const productId = value.productid;
  
              if (renderedProducts.includes(productId)) {
                return null;
              }
  
              switch (productId) {
                case PRODUCTID_ARRIVALBUNDLE:
                  productComponent = (
                    <ProductCard
                      image={BUNDLEPRODUCT}
                      title={value.product}
                      desc={value.description}
                      productid={value.productid}
                    />
                  );
                  break;
                case PRODUCTID_ARRIVAL:
                  productComponent = (
                    <ProductCard
                      image={ARRIVALPRODUCT}
                      title={value.product}
                      desc={value.description}
                      productid={value.productid}
                    />
                  );
                  break;
                case PRODUCTID_DEPARTURE:
                  productComponent = (
                    <ProductCard
                      image={DEPARTUREPRODUCT}
                      title={value.product}
                      desc={value.description}
                      productid={value.productid}
                    />
                  );
                  break;
                default:
                  break;
              }
  
              if (productComponent) {
                renderedProducts.push(productId);
                return productComponent;
              }
  
              return null; // Always have a fallback return
            })}
          </div>
        </div>
      )}
    </>
  );
  
};  

export default Home;