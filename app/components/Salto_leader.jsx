"use client";

import arrowslaid from "@/app/assets/icons/arrowslaid.svg";
import saltoiconcart from "@/app/assets/icons/saltoiconcart.svg";
import vabimagecart from "@/app/assets/image/vabimagecart.png";
import Image from "next/image";
import saltocart from "@/app/assets/image/saltocart.png";
import Maincart from "./maincart";
import { useState } from "react";

const slides = [
  () => (
    <div className="flex items-center gap-5">
      {/* твои карточки */}
      <Maincart
        icon={saltoiconcart}
        product={vabimagecart}
        title="Карточка 1"
        ratting={3}
        cashback={12}
        oldprice={570}
        discount="-17%"
        newprice={1239}
        productnumber={100121}
      />
      <Maincart
        icon={saltoiconcart}
        product={vabimagecart}
        title="Карточка 2"
        ratting={4}
        cashback={10}
        oldprice={600}
        discount="-15%"
        newprice={1200}
        productnumber={100122}
      />
      <Maincart
        icon={saltoiconcart}
        product={vabimagecart}
        title="Карточка 3"
        ratting={5}
        cashback={8}
        oldprice={590}
        discount="-10%"
        newprice={1150}
        productnumber={100123}
      />
      <Maincart
        icon={saltoiconcart}
        product={vabimagecart}
        title="Карточка 4"
        ratting={2}
        cashback={5}
        oldprice={500}
        discount="-20%"
        newprice={1000}
        productnumber={100124}
      />

      <Image src={saltocart} alt="saltocart" height={460} />
    </div>
  ),
  () => (
    <div className="flex items-center gap-5">
      <Maincart
        icon={saltoiconcart}
        product={vabimagecart}
        title="Карточка 5"
        ratting={4}
        cashback={7}
        oldprice={580}
        discount="-12%"
        newprice={1100}
        productnumber={100125}
      />
      <Maincart
        icon={saltoiconcart}
        product={vabimagecart}
        title="Карточка 6"
        ratting={3}
        cashback={9}
        oldprice={620}
        discount="-14%"
        newprice={1180}
        productnumber={100126}
      />
      <Maincart
        icon={saltoiconcart}
        product={vabimagecart}
        title="Карточка 7"
        ratting={5}
        cashback={11}
        oldprice={610}
        discount="-18%"
        newprice={1250}
        productnumber={100127}
      />
      <Maincart
        icon={saltoiconcart}
        product={vabimagecart}
        title="Карточка 8"
        ratting={4}
        cashback={6}
        oldprice={540}
        discount="-16%"
        newprice={1080}
        productnumber={100128}
      />
      <Image src={saltocart} alt="saltocart" height={460} />
    </div>
  ),
];

export default function Salto_leader() {
  const totalSlides = slides.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const offset = -(currentIndex * (100 / totalSlides));

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="container mx-auto py-10 overflow-hidden">
      <div className="flex flex-col w-full h-auto">
        <div className="flex items-center justify-between pb-7">
          <p className="text-2xl">
            Лидеры продаж от <span className="font-bold">Teandy</span>
          </p>
          <div className="flex gap-5 rounded-full bg-white p-2">
            <button onClick={prev}>
              <Image
                src={arrowslaid}
                alt="arrow left"
                className="cursor-pointer"
              />
            </button>
            <button onClick={next}>
              <Image
                src={arrowslaid}
                alt="arrow right"
                className="rotate-180 cursor-pointer"
              />
            </button>
          </div>
        </div>

        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${totalSlides * 100}%`,
            transform: `translateX(${offset}%)`,
          }}
        >
          {slides.map((Slide, idx) => (
            <div
              key={idx}
              className="flex-shrink-0"
              style={{ width: `${100 / totalSlides}%` }}
            >
              <Slide />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
