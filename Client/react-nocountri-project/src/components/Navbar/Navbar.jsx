import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Ver Info", to: "/", current: false },
  { name: "Modificar", to: "/", current: false },
  { name: "Cerrar sesión", to: "/", current: false },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white text-gray-800 shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 py-3 sm:px-6 md:px-14">
            <div className="flex items-center justify-between">
              <img src={Logo} alt="Logo" className="h-14 w-auto mr-2" />
              <div className="flex items-center">
                <div className="text-sky-600 font-semibold px-3 pb-1">
                  Gonzalez, Jaquelina
                </div>
                <Disclosure.Button className="text-gray-400 hover:text-gray-900 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="absolute top-16 right-0 bg-white shadow-md w-56">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-200 hover:text-sky-900 rounded-md"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
