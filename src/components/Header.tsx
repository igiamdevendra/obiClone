import { Link } from "react-router-dom"
import JAM from "../assets/JAM.png"

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
        <Link to="/">
          <img src={JAM} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Header