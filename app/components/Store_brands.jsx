"use client";

import { useState } from "react";
import Image from "next/image";
import arrowslaid from "@/app/assets/icons/arrowslaid.svg";
import tiandyicon from "@/app/assets/icons/tiandyicon.svg";
import saltoicon from "@/app/assets/icons/saltoicon.svg";
import miicon from "@/app/assets/icons/miicon.svg";
import vab1tiandy from "@/app/assets/image/vab1tiandy.png";
import vab2tiandy from "@/app/assets/image/vab2tiandy.png";
import basetiandy from "@/app/assets/image/basetiandy.png";
import saltoproduct from "@/app/assets/image/saltoproduct.png";
import mivab from "@/app/assets/image/mivab.png";
import micleaner from "@/app/assets/image/micleaner.png";
import base from "@/app/assets/image/base.png";

// Карточки
const slides = [
  () => (
    <div className="rounded-xl flex flex-col bg-white w-full h-56 p-6 shrink-0">
      <Image src={tiandyicon} alt="tiandyicon" />
      <div className="flex relative mt-2">
        <Image src={basetiandy} alt="basetiandy" />
        <Image
          src={vab1tiandy}
          alt="vab1tiandy"
          className="absolute z-10 left-12"
        />
        <Image src={vab2tiandy} alt="vab2tiandy" />
      </div>
    </div>
  ),
  () => (
    <div className="rounded-xl flex bg-white w-full h-56 relative p-6 shrink-0">
      <Image src={saltoicon} alt="saltoicon" className="absolute -top-7" />
      <Image
        src={saltoproduct}
        alt="saltoproduct"
        className="absolute bottom-0 right-4"
      />
    </div>
  ),
  () => (
    <div className="rounded-xl flex flex-col bg-white w-full h-56 p-6 shrink-0">
      <div className="flex items-center gap-1">
        <Image src={miicon} alt="miicon" />
        <p className="text-2xl font-bold">Xiaomi</p>
      </div>
      <div className="flex relative mt-2">
        <Image
          src={mivab}
          alt="mivab"
          className="absolute left-12 z-10 top-6"
        />
        <Image src={micleaner} alt="micleaner" className="absolute right-8" />
      </div>
    </div>
  ),
  () => (
    <div className="rounded-xl relative flex flex-col bg-white w-full h-56 p-6 shrink-0">
      <div className="absolute right-5 bottom-8">
        <Image src={base} alt="base" />
      </div>
    </div>
  ),
  // Повтор карточек для второго слайда
  () => (
    <div className="rounded-xl flex flex-col bg-white w-full h-56 p-6 shrink-0">
      <Image src={tiandyicon} alt="tiandyicon" />
      <div className="flex relative mt-2">
        <Image src={basetiandy} alt="basetiandy" />
        <Image
          src={vab1tiandy}
          alt="vab1tiandy"
          className="absolute z-10 left-12"
        />
        <Image src={vab2tiandy} alt="vab2tiandy" />
      </div>
    </div>
  ),
  () => (
    <div className="rounded-xl flex bg-white w-full h-56 relative p-6 shrink-0">
      <Image src={saltoicon} alt="saltoicon" className="absolute -top-7" />
      <Image
        src={saltoproduct}
        alt="saltoproduct"
        className="absolute bottom-0 right-4"
      />
    </div>
  ),
  () => (
    <div className="rounded-xl flex flex-col bg-white w-full h-56 p-6 shrink-0">
      <div className="flex items-center gap-1">
        <Image src={miicon} alt="miicon" />
        <p className="text-2xl font-bold">Xiaomi</p>
      </div>
      <div className="flex relative mt-2">
        <Image
          src={mivab}
          alt="mivab"
          className="absolute left-12 z-10 top-6"
        />
        <Image src={micleaner} alt="micleaner" className="absolute right-8" />
      </div>
    </div>
  ),
  () => (
    <div className="rounded-xl relative flex flex-col bg-white w-full h-56 p-6 shrink-0">
      <div className="absolute right-5 bottom-8">
        <Image src={base} alt="base" />
      </div>
    </div>
  ),
];

// Отображение
export default function Store_brands() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;
  const fixedSlides = slides.slice(0, 8); // Только 8 карточек = 2 слайда
  const totalSlides = Math.ceil(fixedSlides.length / itemsPerSlide);
  const offset = -(currentIndex * (100 / totalSlides));

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col w-full h-auto overflow-hidden">
        <div className="flex items-center justify-between pb-7">
          <p className="text-2xl">
            <span className="font-bold">Бренды</span> в нашем магазине
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

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${totalSlides * 100}%`,
              transform: `translateX(${offset}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const cardsForSlide = fixedSlides.slice(
                slideIndex * itemsPerSlide,
                slideIndex * itemsPerSlide + itemsPerSlide
              );
              return (
                <div
                  key={slideIndex}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-1"
                >
                  {cardsForSlide.map((Card, i) => (
                    <Card key={i} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
