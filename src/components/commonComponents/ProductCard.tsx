import { useTranslation } from "react-i18next";
import PriceModal from "./PriceModal";
import Button from "./Button";
import { login } from "../../api/apiCalls";
import { BASE_URL, PRODUCTID_ARRIVAL, PRODUCTID_ARRIVALBUNDLE, ROUTENAME_ARRIVAL, ROUTENAME_ARRIVALBUNDLE, ROUTENAME_DEPARTURE } from "../../constants/commonConstants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PuffLoader } from "react-spinners";
import { useState } from "react";

interface ProductCardProps {
    image: string;
    desc: string;
    title: string;
    productid: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, desc, title, productid }) => {
    const { t } = useTranslation("common");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const openModal = () => {
        const modal = document.getElementById(`my_modal_${productid}`) as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    }

    const generateURLForRedirect = () => {
        let path = "";
        if (productid === PRODUCTID_ARRIVALBUNDLE) {
            path = BASE_URL + ROUTENAME_ARRIVALBUNDLE
        }
        else if (productid === PRODUCTID_ARRIVAL) {
            path = BASE_URL + ROUTENAME_ARRIVAL
        }
        else {
            path = BASE_URL + ROUTENAME_DEPARTURE
        }
        return path;
    }

    const productClickHandler = async () => {
        setLoading(true);
        const response = await login(dispatch);
        if (response?.status === 0) {
            navigate(generateURLForRedirect());
        }
        setLoading(false);
    }

    if (loading) {
        return (<div className="flex justify-center items-center" style={{height: "calc(100vh - 4rem)"}}>
          <PuffLoader color="#ffffff" />
        </div>)
    }

    return (
        <>
            <PriceModal
                productid={productid}
            />
            <div className="card bg-white text-black w-[24rem] border border-gray-300 shadow-xl">
                <PuffLoader 
                loading={loading}
                className="flex justify-center items-center" style={{height: "calc(100vh - 4rem)"}}
                />

                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title w-full justify-center">{title}</h2>
                    <p>{desc}</p>
                    <div className="card-actions justify-between">
                        <Button
                            title={t("book")}
                            onClick={productClickHandler}
                        />
                        <Button
                            title={t("home:viewPrices")}
                            onClick={openModal}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
