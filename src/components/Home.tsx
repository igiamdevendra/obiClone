import BUNDLEPRODUCT from "../assets/bundle_product.jpg"
import ARRIVALPRODUCT from  "../assets/arrival_product.jpg"
import DEPARTUREPRODUCT from "../assets/departure_product.jpg"
import ProductCard from "./commonComponents/ProductCard"

const Home = () => {
  const ProductCardItems = [
    {
      image: BUNDLEPRODUCT,
      desc: "Enjoy your first and last impression of the beautiful island with Jamaicas Personalized and Expedited Airport Concierge Lounge Services where you RELAX. CONNECT and DISCOVER our gateway to paradise.",
      title: "ARRIVAL & DEPARTURE"
    },
    {
      image: ARRIVALPRODUCT,
      desc: "Maximize your time in paradise; enjoy personalized escort services with preferential fast track through immigration and customs whilst you access Jamaicas premier arrival lounge where culture meets comfort.",
      title: "ARRIVAL"
    },
    {
      image: DEPARTUREPRODUCT,
      desc: "Continue your vacation and enjoy our 'happy everafter' with preferential fast track, impressive services and top class amenities of our culturally inspired lounges.",
      title: "DEPARTURE"
    }]
  return (
    <div className="mx-auto text-center px-4 h-screen mt-8 text-black">
      <h1 className="font-medium mb-2 underline text-2xl">LOUNGE SERVICES</h1>
      <h3 className="text-2xl mb-6">Please select your product</h3>

      <div className="flex justify-center gap-6 flex-wrap">
        {ProductCardItems.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            desc={item.desc}
            title={item.title}
          />
        ))}
      </div>
    </div>

  )
}

export default Home