"use client";
import { Button } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
const secondaryNavigation = [
  { name: "Account", href: "/user/profile", current: true },
  { name: "Notifications", href: "/user/notifications", current: false },
  { name: "Billing", href: "/user/billing", current: false },
  { name: "Teams", href: "/user/teams", current: false },
  { name: "Help and Feedback", href: "/user/help", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  const pathname = usePathname();
  return (
    <>
      <header className="border-b border-white/5">
        {/* Secondary navigation */}
        <nav className="flex overflow-x-auto py-4 items-center px-10">
          <a href="/home">
            <Button
              size="sm"
              isIconOnly
              variant="light"
              color="default"
              aria-label="Like"
              href="/home"
            >
              <ArrowLeft aria-hidden="true" strokeWidth={1} size={16} />
            </Button>
          </a>
          <ul
            role="list"
            className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-normal leading-6 text-gray-400 sm:px-6 lg:px-8"
          >
            {secondaryNavigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={clsx(
                    "text-gray-400 hover:text-white hover:bg-neutral-800",
                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-normal",
                    {
                      "bg-neutral-800 text-white": pathname === item.href,
                    }
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="p-14 w-full">{children}</div>
    </>
  );
}
