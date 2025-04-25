import { RouterProvider } from "react-router-dom"
import router from "./routes/AppRoutes"
import "./App.css"
import { useEffect } from "react"
import { getMarkets } from "./api/apiCalls"
import { useAppDispatch } from "./app/store"

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getMarkets(dispatch);
  }, [])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App