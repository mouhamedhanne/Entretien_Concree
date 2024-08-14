"use client";

import Container from "./Container";
import Image from "next/image";
import Logo from "@/public/logo/logo.svg";
import MessageIcon from "@/public/assets/icon-message.svg";
import NotificationIcon from "@/public/assets/icon-notification.svg";
import Avatar from "@/public/assets/avatar.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <Container>
        <header>
          <nav className="">
            <div className="flex justify-between items-center mx-7">
              <div className="flex items-center space-x-8 ">
                <div className="">
                  <Image src={Logo} alt="logo wekomkom" />
                </div>

                <div className="hidden md:flex items-center border-l border-white pl-4 space-x-5">
                  <Link
                    href="/"
                    className={`text-secondary_color hover:text-black ${
                      pathname === "/" ? "font-bold text-text_black" : ""
                    }`}
                  >
                    Acceuil
                  </Link>
                  <Link
                    href="/opportunity"
                    className={`text-secondary_color hover:text-black ${
                      pathname === "/opportunity"
                        ? "font-bold text-text_black"
                        : ""
                    }`}
                  >
                    Opportunité
                  </Link>

                  <Link
                    href="/boutique"
                    className={`text-secondary_color hover:text-black ${
                      pathname === "/boutique"
                        ? "font-bold text-text_black"
                        : ""
                    }`}
                  >
                    Boutique
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 ">
                <Image
                  src={MessageIcon}
                  alt="Illustration Message"
                  className="hover:cursor-pointer"
                />

                <Image
                  src={NotificationIcon}
                  alt="Illustration Notification"
                  className="hover:cursor-pointer"
                />

                <Image
                  src={Avatar}
                  alt="Illustration Avatar"
                  className="hover:cursor-pointer"
                />
              </div>
            </div>
          </nav>
        </header>
      </Container>
      <div className="border-b border-gray-200 w-full mt-[2px]"></div>
    </>
  );
}
