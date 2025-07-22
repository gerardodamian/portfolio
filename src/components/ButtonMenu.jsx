import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function ButtonMenu() {
    return (
        <div className="max-w-min text-right fixed md:hidden flex items-center border border-nav top-6 right-8">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="button"
                                        className={`${
                                            active
                                                ? "bg-indigo-600 text-white"
                                                : "text-gray-900"
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        🏠 Inicio
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#work"
                                        className={`${
                                            active
                                                ? "bg-indigo-600 text-white"
                                                : "text-gray-900"
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        🕵️ Mi trabajo
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#experiencia"
                                        className={`${
                                            active
                                                ? "bg-indigo-600 text-white"
                                                : "text-gray-900"
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        💼 Experiencia
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#tech"
                                        className={`${
                                            active
                                                ? "bg-indigo-600 text-white"
                                                : "text-gray-900"
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        🛠️ Tecnologías
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#cert"
                                        className={`${
                                            active
                                                ? "bg-indigo-600 text-white"
                                                : "text-gray-900"
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        📜 Certificados
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#hire"
                                        className={`${
                                            active
                                                ? "bg-indigo-600 text-white"
                                                : "text-gray-900"
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        📧 Contactame
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
