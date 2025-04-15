import { Outlet } from "react-router-dom"
import NavigationBar from "../components/NavigationBar"

const MasterLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  )
}

export default MasterLayout
