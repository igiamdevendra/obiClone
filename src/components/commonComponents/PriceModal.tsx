import { useTranslation } from "react-i18next";
import {
  PRODUCTID_ARRIVAL,
  PRODUCTID_ARRIVALBUNDLE,
} from "../../constants/commonConstants";

interface PriceModalProps {
  // title: string;
  productid: string;
}

const PriceModal: React.FC<PriceModalProps> = ({ productid }) => {
  const { t } = useTranslation(["common"]);
  const getDirectionTranslationKey = () => {
    let translatoinKey = null;
    switch (productid) {
      case PRODUCTID_ARRIVALBUNDLE:
        translatoinKey = "arrivalDeparture";
        break;
      case PRODUCTID_ARRIVAL:
        translatoinKey = "arrival";
        break;
      default:
        translatoinKey = "departure";
        break;
    }
    return translatoinKey;
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">
          {t("priceModalHeading", { product: t(getDirectionTranslationKey())})}
        </h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  );
};

export default PriceModal;
