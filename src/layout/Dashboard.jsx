import { NavLink, Outlet } from "react-router-dom";
import {
  FaCalendar,
  FaSearch,
  FaShoppingCart,
  FaVoicemail,
} from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import useCart from "../Hook/useCart";
const Dashboard = () => {
  const [cart] = useCart();
  //TODO: get isAdmin value from the database
  const isAdmin = true;
  return (
    <div className="flex">
      {/*dash boardside bar */}
      <div className="w-64 min-h-full bg-orange-400">
        <ul className="menu">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart />
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <MdOutlineReviews />
              Add review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/bookings"}>
              <TbBrandBooking />
              My bookings
            </NavLink>
          </li>
          {/**Shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaSearch />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/contact"}>
              <FaVoicemail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/*Dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
