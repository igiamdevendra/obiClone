import JAM from "../assets/JAM.png";
import { CgProfile } from "react-icons/cg";

// Menu items data
const menuItems = [
  { name: "HOME", link: "/" },
  {
    name: "SERVICES",
    submenu: [
      { name: "VIP AIRPORT LOUNGE MEMBERSHIP", link: "/vip-attractions" },
      { name: "ARRIVAL", link: "/vip-lounge" },
    ],
  },
  { name: "COMMUNICATION", link: "/communication" },
  { name: "FEEDBACK", link: "/feedback" },
  { name: "UPDATE FLIGHT DETAILS", link: "/update-flight" },
];

const NavigationBar = () => {
  return (
    <div className="navbar bg-white text-black shadow-sm px-5 flex justify-between">
      <div>
        <img src={JAM} alt="Logo" />
      </div>

      <div className="dropdown hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-1 relative">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.submenu ? (
                <details>
                  <summary>{item.name}</summary>
                  <ul className="dropdown-content bg-white p-2 w-70 border border-gray-400 absolute top-6 left-0">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={subItem.link}>{subItem.name}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a href={item.link}>{item.name}</a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-5">
        <div className="dropdown dropdown-end mt-1">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-white text-black z-1 mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn-ghost">
            <CgProfile className="text-2xl cursor-pointer" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-black rounded-box z-1 mt-3 w-52 p-2 shadow border border-gray-400">
            <li><a>Subscriber Login</a></li>
            <li><a>Partener Login</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
