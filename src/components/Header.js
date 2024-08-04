import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Overview",
    href: "#",
  },
  {
    name: "Google address bar",
    href: "#",
  },
  {
    name: "Password check",
    href: "#",
  },
  {
    name: "Use across devices",
    href: "#",
  },
  {
    name: "Dark mode",
    href: "#",
  },
  {
    name: "Tabs",
    href: "#",
  },
  {
    name: "Articles for you",
    href: "#",
  },
  {
    name: "Extensions",
    href: "#",
  },
  {
    name: "Automations",
    href: "#",
  },
];

const support = [
  { name: "Helpful tips for Chrome", href: "#" },
  { name: "Support", href: "#" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header>
      <nav
        aria-label="Global"
        className=" shadow-ch-header flex h-16 items-center lg:px-8"
      >
        <a href="#" className="px-1.5">
          <span className="sr-only">Chrome</span>
          <img alt="" src="/images/header-logo.png" className="h-9 w-auto" />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className=" inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden mx-8 lg:flex ">
          <a href="#" className=" text-ch-gray font-medium leading-6 px-3">
            Home
          </a>
          <a href="#" className="  text-ch-gray font-medium leading-6 px-3">
            The Browser by Google
          </a>
          <Popover className="relative px-3">
            <PopoverButton className=" focus:outline-none text-ch-gray  flex items-center gap-x-1  font-medium leading-6 ">
              Features
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-ch-gray font-medium"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute  top-full z-10 mt-3 w-48 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="">
                {features.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 leading-6 hover:bg-gray-50"
                  >
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-medium text-ch-gray"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative px-3">
            <PopoverButton className="focus:outline-none text-ch-gray flex items-center gap-x-1  font-medium leading-6">
              Support
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-ch-gray font-medium"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              {support.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-ch-gray font-medium leading-6  hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Chrome</span>
              <img
                alt=""
                src="/images/header-logo.png"
                className="h-9 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                >
                  The Browser by Google
                </a>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50">
                    Features
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180 text-ch-gray font-medium"
                    />
                  </DisclosureButton>
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50">
                    Support
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {support.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3  font-medium leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
