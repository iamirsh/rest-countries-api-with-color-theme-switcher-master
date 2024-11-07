import React from "react";
import { IoSearch, IoChevronDown } from "react-icons/io5";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="px-10">
      <div className="flex justify-between items-center mt-8">
        {/* Search */}
        <div className="flex items-center p-2 bg-slate-100 rounded-lg">
          <IoSearch className="mr-2" />
          <input
            type="text"
            className="outline-none bg-transparent"
            placeholder="Search for a country..."
          />
        </div>
        {/* Dropdown */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Filter by Region
              <IoChevronDown
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  All
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  Africa
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  Americas
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  Asia
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  Europe
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  Oceania
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
      {/* Cards */}
      <div className="grid gap-10 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {Array(8).fill(null).map((_, index) => (
            <div key={index} className="rounded-lg drop-shadow-md bg-white cursor-pointer">
              <Image
                src="/india.png"
                width={100}
                height={100}
                className="w-full rounded-t-lg"
                alt="img"
              />
              <div className="p-2">
                <h2 className="mb-2">India</h2>
                <p>Population: 5464654646</p>
                <p>Region: Asia</p>
                <p>Capital: Delhi</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
