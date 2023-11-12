"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import NewProjectModal from "./modals/modal-new-project";
import { Home, Files, FileInput, Bell } from "lucide-react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import ProjectInfoModal from "./modals/modal-project-info";
import ProjectLeaveModal from "./modals/modal-leave-project";
import DeleteModal from "./modals/modal-delete";
import ProjectSettingsModal from "./modals/modal-file-info";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Badge,
  Breadcrumbs,
  BreadcrumbItem,
  DropdownItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  User,
} from "@nextui-org/react";

import DataModel from "@/data.json";

const navigation = [
  { name: "Home", href: "/home", icon: Home, current: true },
  { name: "My Files", href: "/my-files", icon: Files, current: false },
  {
    name: "Shared with me",
    href: "/shared-files",
    icon: FileInput,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LayoutUi({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        {/*------------------------>Side Bar Mobile Version<------------------------*/}

        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-950 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      {/*------------------------>Profile Dropdown Mobile Version<------------------------*/}
                      <Dropdown placement="bottom-start">
                        <DropdownTrigger>
                          <User
                            as="button"
                            avatarProps={{
                              isBordered: true,
                              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                            }}
                            className="transition-transform"
                            description="@tonyreichert"
                            name="Tony Reichert"
                          />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="User Actions" variant="flat">
                          <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-bold">Signed in as</p>
                            <p className="font-bold">@tonyreichert</p>
                          </DropdownItem>
                          <DropdownItem href="/user/profile" key="settings">
                            My Settings
                          </DropdownItem>
                          <DropdownItem href="/user/teams" key="team_settings">
                            Team Settings
                          </DropdownItem>
                          <DropdownItem
                            href="/user/help"
                            key="help_and_feedback"
                          >
                            Help & Feedback
                          </DropdownItem>
                          <DropdownItem key="logout" color="danger">
                            Log Out
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    {/*------------------------>Main Navigation Mobile Version<------------------------*/}
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className={clsx(
                                    "text-gray-400 hover:text-white hover:bg-neutral-800",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-normal",
                                    {
                                      "bg-neutral-800 text-white":
                                        pathname === item.href,
                                    }
                                  )}
                                >
                                  <div className=" flex flex-row items-center">
                                    <item.icon
                                      className="h-5 w-5 shrink-0 mr-2"
                                      aria-hidden="true"
                                      strokeWidth={1}
                                      size={16}
                                    />
                                    {item.name}
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          {/*------------------------>Projects Navigation Mobile Version<------------------------*/}
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your projects
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {DataModel.map((data) => (
                              <Link key={data.id} href={`/project/${data.id}`}>
                                <ProjectItem key={data.id} {...data} />
                              </Link>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* ------------------------>Static sidebar for desktop <------------------------*/}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto   px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              {/*------------------------>Profile Dropdown<------------------------*/}
              <div className="mt-2">
                <Dropdown placement="bottom-start">
                  <DropdownTrigger>
                    <User
                      as="button"
                      avatarProps={{
                        isBordered: true,
                        src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                      }}
                      className="transition-transform"
                      description="@tonyreichert"
                      name="Tony Reichert"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem     showDivider key="profile" className="h-14 gap-2">
                      <p className="font-bold">Signed in as</p>
                      <p className="font-bold">@tonyreichert</p>
                    </DropdownItem>
                    <DropdownItem href="/user/profile" key="settings">
                      My Settings
                    </DropdownItem>
                    <DropdownItem href="/user/teams" key="team_settings">
                      Team Settings
                    </DropdownItem>
                    <DropdownItem     showDivider href="/user/help" key="help_and_feedback">
                      Help & Feedback
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger">
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>

            {/*------------------------>Navigation Main Menut<------------------------*/}
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul
                    role="list"
                    className="-mx-2 space-y-1 p-3 rounded-xl bg-neutral-900"
                  >
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={clsx(
                            "text-gray-400 hover:text-white hover:bg-neutral-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-normal",
                            {
                              "bg-neutral-800 text-white":
                                pathname === item.href,
                            }
                          )}
                        >
                          <div className=" flex flex-row items-center">
                            <item.icon
                              className="h-5 w-5 shrink-0 mr-2"
                              aria-hidden="true"
                              strokeWidth={1}
                              size={16}
                            />
                            {item.name}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  {/*------------------------>Projects List - Components in file<------------------------*/}
                  <div className="flex flex-row items-center justify-between">
                    <div className="text-xs font-semibold leading-6 text-gray-400">
                      Your projects
                    </div>
                    <NewProjectModal />
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {DataModel.map((data) => (
                      <li key={data.id}>
                        <ProjectItem key={data.id} {...data} />
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/*------------------------>NavBar Section<------------------------*/}
        <div className="lg:pl-72 ">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 px-4 bg-black sm:gap-x-6 sm:px-6 lg:px-8">
            {/*------------------------>Menu Button For Mobile<------------------------*/}
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex  justify-between items-center flex-1 gap-x-4 self-stretch lg:gap-x-6">
              {/*------------------------>Components in file<------------------------*/}
              <Crums />
              <div className="flex items-center gap-x-4 lg:gap-x-2">
                <Button size="sm" color="secondary" variant="shadow">
                  Upgrade
                </Button>
                <input
                  type="text"
                  name="Search"
                  id="search"
                  className="block w-full h-8 rounded-md border-0 py-1.5 bg-neutral-800 text-gray-300 shadow-sm  placeholder:text-gray-300  sm:text-sm sm:leading-6"
                  placeholder="Search your models"
                />
                {/*------------------------>Components in file<------------------------*/}
                <Notifications />
              </div>
            </div>
          </div>
          {/*------------------------>Content<------------------------*/}
          <main className="py-7">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}

function ProjectItem({ ...props }) {
  const pathname = usePathname();
  const [showDelete, setShowDelete] = useState(false);
  const [showProjectSettings, setShowProjectSettings] = useState(false);
  const [showProjectLeave, setShowProjectLeave] = useState(false);
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  return (
    <div className="relative">
      <Link
        key={props.id}
        href={`/project/${props.id}`}
        className={clsx(
          "text-gray-400 hover:text-white hover:bg-neutral-800",
          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-normal",
          {
            "bg-neutral-800   text-white": pathname === "/project/" + props.id,
          }
        )}
      >
        <div className="flex w-full  items-center flex-row justify-between">
          <div className="flex items-center">
            <div className="relative inline-block">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-500">
                <span className="text-sm font-medium leading-none text-white">
                  {props.Initials}
                </span>
              </span>
              <span
                className={clsx(
                  "absolute right-0.5 top-0.5 block h-2 w-2 -translate-y-1/2 translate-x-1/2 transform rounded-full",
                  { "bg-green-400": props.Messages === "true" },
                  { "bg-gray-600": props.Messages === "false" }
                )}
              />
            </div>
            <div className="flex flex-col ml-4">
              <p className="  text-sm ">{props.Name}</p>
              <p className=" font-normal text-xs ">
                {props.Model_Quantity + " " + "Models"}{" "}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute top-3 right-2">
        {/*------------------------>Project Settings Dropdown<------------------------*/}
        <Dropdown>
          <DropdownTrigger>
            <Button variant="light" size="sm" isIconOnly>
              <BiDotsVerticalRounded size={20} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Action event example">
            <DropdownItem
              key="information"
              onPress={() => {
                setShowProjectInfo(true);
              }}
            >
              Project infonformation
            </DropdownItem>
            <DropdownItem
              key="leave"
              showDivider
              onPress={() => {
                setShowProjectLeave(true);
              }}
            >
              Leave Project
            </DropdownItem>
            <DropdownItem
              key="delete"
              className="text-danger"
              color="danger"
              onPress={() => {
                setShowDelete(true);
              }}
            >
              Delete Project
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <ProjectSettingsModal
        open={showProjectSettings}
        setOpen={setShowProjectSettings}
      />
      <ProjectInfoModal open={showProjectInfo} setOpen={setShowProjectInfo} />
      <ProjectLeaveModal
        open={showProjectLeave}
        setOpen={setShowProjectLeave}
      />
      <DeleteModal open={showDelete} setOpen={setShowDelete} />
    </div>
  );
}

function Notifications() {
  const [isInvisible, setIsInvisible] = useState(false);
  return (
    <Popover placement="bottom-end" showArrow={true}>
      <Badge
        content="99+"
        showOutline="false"
        size="sm"
        shape="circle"
        color="danger"
      >
        <PopoverTrigger>
          <Button size="sm" aria-label="more than 99 notifications">
            <Bell size={20} />
          </Button>
        </PopoverTrigger>
      </Badge>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function Crums() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  return (
    <Breadcrumbs>
      <BreadcrumbItem>{pathNames}</BreadcrumbItem>
    </Breadcrumbs>
  );
}
