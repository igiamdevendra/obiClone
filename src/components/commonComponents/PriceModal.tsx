import { useTranslation } from "react-i18next";
import { getDirectionTranslationKey } from "../../utils/general";

interface PriceModalProps {
  // title: string;
  productid: string;
}

const PriceModal: React.FC<PriceModalProps> = ({ productid }) => {
  const { t } = useTranslation(["common"]);

  return (
    <dialog id={`my_modal_${productid}`} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">
          {t("priceModalHeading", { product: t(getDirectionTranslationKey(productid))})}
        </h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  );
};

export default PriceModal;
