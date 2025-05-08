import { RouterProvider } from "react-router-dom"
import router from "./routes/AppRoutes"
import "./App.css"
import { useEffect } from "react"
import { getMarkets } from "./api/apiCalls"
import { useAppDispatch } from "./app/store"
import { availableMarkets as AM, selectedMarketId as SM } from "./features/market/marketSlice"
import { useSelector } from "react-redux"

const App = () => {
  const dispatch = useAppDispatch();
  const selectedMarketId = useSelector(SM);
  const availableMarkets = useSelector(AM);

  useEffect(() => {
    !selectedMarketId && getMarkets(dispatch);
  }, [availableMarkets])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App