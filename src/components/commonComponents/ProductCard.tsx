import PriceModal from "./PriceModal";

interface ProductCardProps {
    image: string;
    desc: string;
    title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, desc, title }) => {
    const openModal = () => {
        const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    }
    return (
        <>
            <PriceModal 
            title={title}
            />
            <div className="card bg-white text-black w-[27rem] border border-gray-300 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title w-full justify-center">{title}</h2>
                    <p>{desc}</p>
                    <div className="card-actions justify-between">
                        <button className="btn btn-primary">BOOK</button>
                        <button onClick={openModal} className="btn btn-primary">View Prices</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
