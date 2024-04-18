import { Fragment, useState, useEffect, useRef } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { Bell } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/Auth/auth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="sm:hidden">
              <img className="h-12 w-auto" src={Logo} alt="Ed Tech" />
            </div>
          </div>
          <div className="flex flex-1 justify-center sm:justify-start">
            <Link
              to={"/"}
              className="hidden sm:flex flex-shrink-0 items-center"
            >
              <img className="h-12 w-auto" src={Logo} alt="Ed Tech" />
            </Link>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            <Fragment>
              <Link to={"/about"} className="text-sky-600">
                Conozcan EdTech
              </Link>
              {isAuthenticated && (
                <Menu as="div" className="relative ml-3" ref={menuRef}>
                  <div className="flex">
                    <div className="font-semibold px-1">{user}</div>
                    <Menu.Button
                      className="relative flex pt-1"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {isOpen ? (
                        <FiArrowUp className="text-sky-600 text-xl" />
                      ) : (
                        <FiArrowDown className="text-sky-600 text-xl" />
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    show={isOpen}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={"/"}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Ver información
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={"/"}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            onClick={handleLogout}
                          >
                            Cerrar sesión
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              )}
            </Fragment>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
