import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Ayuda", to: "/ayuda", current: false },
  { name: "Conócenos", to: "/conocenos", current: false },
  { name: "Experiencias", to: "/experiencias", current: false },
  { name: "Acceso", to: "/acceso", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white text-gray-800 shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 py-3 sm:px-6 md:px-14">
            <div className="relative flex items-center justify-between">
              <div className="flex flex-shrink-0 items-center">
                <img src={Logo} alt="Logo" className="h-14 w-auto mr-2" />
                <div className="ml-auto">
                  <span className="text-sky-600 text-3xl font-bold block">
                    EdTech
                  </span>
                  <span className="text-[0.6rem] block">GESTION EDUCATIVA</span>
                  <span className="text-[0.6rem] block">
                    PADRES | ALUMNOS | DOCENTES
                  </span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        item.current
                          ? "bg-sky-900 text-white"
                          : "text-gray-600 hover:bg-gray-200 hover:text-sky-900",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
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

          <Disclosure.Panel className="sm:hidden absolute top-16 right-0 bg-white shadow-md w-56">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to} 
                  className={classNames(
                    item.current
                      ? "bg-sky-900 text-white"
                      : "text-gray-600 hover:bg-gray-200 hover:text-sky-900",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
