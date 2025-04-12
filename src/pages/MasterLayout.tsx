import { Outlet } from "react-router-dom"
import NavigationBar from "../components/NavigationBar"
import Header from "../components/Header"

const MasterLayout = () => {
  return (
    <div>
      <Header />
      <NavigationBar />
      <Outlet />
    </div>
  )
}

export default MasterLayout
