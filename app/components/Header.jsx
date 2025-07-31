"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/app/assets/icons/logo.svg";
import newicon from "@/app/assets/icons/newicon.svg";
import arrow from "@/app/assets/icons/arrow.svg";
import catalog from "@/app/assets/icons/catalog.svg";
import search from "@/app/assets/icons/search.svg";
import people from "@/app/assets/icons/people.svg";
import life from "@/app/assets/icons/life.svg";
import cart from "@/app/assets/icons/cart.svg";
import veb from "@/app/assets/icons/veb.svg";
import intercom from "@/app/assets/icons/intercom.svg";
import castle from "@/app/assets/icons/castle.svg";
import screen from "@/app/assets/icons/screen.svg";
import camera from "@/app/assets/icons/camera.svg";
import barrier from "@/app/assets/icons/Barrier.svg";
import Link from "next/link";
import Language_button from "./language_button";

export default function Header({ type }) {
  const pathname = usePathname();

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Image src={logo} alt="logo.svg"></Image>
          </div>
          <div>
            <ul className="flex gap-5">
              <li>
                <Link href={"#"}>
                  <div className="relative w-fit">
                    <p>Новинки</p>
                    <div className="absolute -right-5 -top-2">
                      <Image src={newicon} alt="error"></Image>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  {" "}
                  <p>Шоу-рум</p>{" "}
                </Link>
              </li>
              <li>
                <Link href={"#"} className="flex gap-1">
                  {" "}
                  <p>Клиентам</p>
                  <Image src={arrow} alt="error"></Image>
                </Link>
              </li>
              <li>
                <Link href={"#"} className="flex gap-1">
                  {" "}
                  <p>Услуги</p>
                  <Image src={arrow} alt="error"></Image>
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  {" "}
                  <p className="text-red-500">Акции</p>
                </Link>
              </li>
              <li>
                <Link href={"#"}>Наши проекты</Link>
              </li>
              <li>
                <Link href={"#"}>Новости</Link>
              </li>
              <li>
                <Link href={"#"}>Служба поддержки</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-3">
            <p className="text-xl">44 625 4444</p>
            <Language_button></Language_button>
          </div>
        </div>
      </div>
      <div className="bg-[#F2EFF1]">
        <div className="container mx-auto">
          <div className="flex justify-between w-full h-auto py-5">
            <div className="flex gap-3 items-center">
              <Image src={catalog} alt="error"></Image>
              <p className="text-xl">Каталог</p>
            </div>
            <div className="relative w-3xl">
              <input
                type="text"
                placeholder="Поиск"
                className="w-full pr-12 rounded-full bg-white p-3"
              />
              <Image
                src={search}
                alt="search icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5"
              />
            </div>
            <div className="flex items-center gap-4">
              <Link href={"#"}>
                <div className="flex items-center gap-1">
                  <Image src={people} alt="people icon"></Image>
                  <p className="underline decoration-dashed">Войти</p>
                </div>
              </Link>
              <Link href={"#"}>
                {" "}
                <Image src={life} alt="life icon"></Image>{" "}
              </Link>
              <Link href={"#"}>
                {" "}
                <Image src={cart} alt="cart icon"></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={type === "main" ? "bg-[#FFE9DC]" : "bg-white"}>
        <div className="container mx-auto">
          <ul className="flex justify-between items-center py-5">
            <li>
              <Link
                href="/camera"
                className={`flex items-center gap-5 transition-colors duration-300 ${
                  pathname === "/camera"
                    ? "text-blue-500 font-semibold"
                    : "text-gray-500 hover:text-blue-400"
                }`}
              >
                <Image src={veb} alt="Домофоны" />
                <p>Камеры</p>
              </Link>
            </li>
            <li>
              <Link
                href="/intercoms"
                className={`flex items-center gap-5 transition-colors duration-300 ${
                  pathname === "/intercoms"
                    ? "text-blue-500 font-semibold"
                    : "text-gray-500 hover:text-blue-400"
                }`}
              >
                <Image src={intercom} alt="Домофоны" />
                <p>Домофоны</p>
              </Link>
            </li>
            <li>
              <Link
                href="/control"
                className={`flex items-center gap-5 transition-colors duration-300 ${
                  pathname === "/control"
                    ? "text-blue-500 font-semibold"
                    : "text-gray-500 hover:text-blue-400"
                }`}
              >
                <Image src={castle} alt="Домофоны" />
                <p>Контроль доступа</p>
              </Link>
            </li>
            <li>
              <Link
                href="/monitors"
                className={`flex items-center gap-5 transition-colors duration-300 ${
                  pathname === "/monitors"
                    ? "text-blue-500 font-semibold"
                    : "text-gray-500 hover:text-blue-400"
                }`}
              >
                <Image src={screen} alt="Домофоны" />
                <p>Мониторы</p>
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="flex items-center gap-5 text-gray-500"
              >
                <Image src={camera} alt="error"></Image>
                <p>Видеорегистраторы</p>
              </Link>
            </li>
            <li>
              <Link
                href="/barrier"
                className={`flex items-center gap-5 transition-colors duration-300 ${
                  pathname === "/barrier"
                    ? "text-blue-500 font-semibold"
                    : "text-gray-500 hover:text-blue-400"
                }`}
              >
                <Image src={barrier} alt="Домофоны" />
                <p>Шлагбаумы</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
