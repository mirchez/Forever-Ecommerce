import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    showSearch,
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="logo image" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink className="flex flex-col items-center gap-1" to="/">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink className="flex flex-col items-center gap-1" to="/collection">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink className="flex flex-col items-center gap-1" to="/about">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink className="flex flex-col items-center gap-1" to="/contact">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="search icon"
          className={`w-5 cursor-pointer ${showSearch ? "hidden" : " "}`}
        />

        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="profile icon"
          />
          {/*------Dropdown Menu---------- */}

          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu left-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="cart image"
            className="w-5 min-w-5"
          />
          <p className="absolute right-[5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          alt="menu icon"
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
      </div>
      {/*sidebar menu for small screen*/}
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-grey-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              alt="dropdown icon"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          <div className="flex flex-col gap-7 h-screen items-center  justify-center mt-[-85px]">
            <NavLink
              onClick={() => setVisible(false)}
              className="cursor-pointer hover:text-black"
              to="/"
            >
              <p>HOME</p>
              <hr className=" border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="cursor-pointer hover:text-black"
              to="/collection"
            >
              <p>COLLECTION</p>
              <hr className=" border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="cursor-pointer hover:text-black"
              to="/about"
            >
              <p>ABOUT</p>
              <hr className=" border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="cursor-pointer hover:text-black"
              to="/contact"
            >
              <p>CONTACT</p>
              <hr className=" border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
