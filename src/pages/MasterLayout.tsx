import { Outlet } from "react-router-dom"
import NavigationBar from "../components/NavigationBar"
import Loader from "../components/commonComponents/Loader"

const MasterLayout = () => {

  return (
    <div>
      <Loader />
      <NavigationBar />
      <Outlet />
    </div>
  )
}

export default MasterLayout
