/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import logo from "../../assets/GadgetVista.png";
import ProfileAvatar from "./ProfileAvatar";

function Header({ user }) {
  console.log(user);
  const [state, setState] = useState(false);
  const [count, setCount] = useState(0);
  const [dropdownState, setDropdownState] = useState({
    isActive: false,
    index: null,
  });

  const navigation = [
    { title: "Home", path: "/", isDropdown: false },
    { title: "Shop", path: "/shop", isDropdown: false },
    { title: "About", path: "/about", isDropdown: false },
    { title: "Contact Us", path: "/contact", isDropdown: false },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      const target = e.target;
      if (!target.closest(".nav-menu")) {
        setDropdownState({ isActive: false, index: null });
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setDropdownState]);

  return (
    <>
      <nav
        style={{ overflow: "hidden", backgroundColor: '#1F2544' }}
        className={`fixed top-0 z-20 bg-#1F2544 w-full md:text-sm md:border-none ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""}`}
      >
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#">
              <img src={logo} width={80} height={30} alt="GadgetVista" />
            </a>
            <div className="md:hidden">
              <button
                className="text-white hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
              }`}
          >
            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, index) => (
                <li key={index}>
                  {item.isDropdown ? (
                    <button
                      className="w-full flex items-center justify-between gap-1 text-white hover:text-indigo-600"
                      onClick={() =>
                        setDropdownState({
                          index,
                          isActive: !dropdownState.isActive,
                        })
                      }
                    >
                      {item.title}
                      {dropdownState.index == index &&
                        dropdownState.isActive ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  ) : (
                    <a
                      href={item.path}
                      className="block text-white hover:text-indigo-600"
                    >
                      {item.title}
                    </a>
                  )}
                  {item.isDropdown &&
                    dropdownState.index == index &&
                    dropdownState.isActive ? (
                    <div className="mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0">
                      <ul className="max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3">
                        {item?.navs.map((dropdownItem, index) => (
                          <li key={index}>
                            <p className="text-indigo-600 text-sm">
                              {dropdownItem.label}
                            </p>
                            <ul className="mt-5 space-y-6">
                              {dropdownItem.navs.map((navItem, index) => (
                                <li key={index} className="group">
                                  <a
                                    href={navItem.path}
                                    className="flex gap-3 items-center"
                                  >
                                    <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14">
                                      {navItem.icon}
                                    </div>
                                    <div>
                                      <span className="text-white duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                                        {navItem.title}
                                      </span>
                                      <p className="text-sm text-white group-hover:text-gray-800 mt-1">
                                        {navItem.desc}
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              ))}
              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <form className="flex items-center space-x-2 border rounded-md p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-none text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    className="w-full outline-none appearance-none placeholder-#1F2544-500 text-white sm:w-auto"
                    type="text"
                    placeholder="Search"
                    style={{ backgroundColor: '#1F2544' }}
                  />
                </form>

                <li>
                  {count > 0 && (
                    <span className="top-0 right-0 bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
                      {count}
                    </span>
                  )}
                  <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                </li>
                {user ? (
                  <ProfileAvatar />
                ) : (
                  <li onClick={() => setCount((pre) => pre + 1)}>
                    <a
                      href="/login"
                      className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                    >
                      login
                    </a>
                  </li>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className="backdrop z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
