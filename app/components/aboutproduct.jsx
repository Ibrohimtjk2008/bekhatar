"use client";
import bigcameradahua from "@/app/assets/image/bigcameradahua.png";
import smalcameradahua from "@/app/assets/image/smalcameradahua.png";
import smalcameradahua2 from "@/app/assets/image/smalcameradahua2.png";
import lifeicon from "@/app/assets/icons/lifeicon.svg";
import Image from "next/image";
import Cardproduct from "./cardproduct";
import vabimagecart from "@/app/assets/image/vabimagecart.png";
import { useState } from "react";

const about = [
  <div className="flex flex-col gap-6 py-10">
    <p className="font-bold text-2xl">Компактная IP-видеокамера с Wi-Fi 2Мп</p>
    <p className="text-xl leading-relaxed">
      Линейка видеокамер Cube, которая входит в серию Dahua Wireless, отличается
      не только простотой установки и работы, но и выдающимися техническими
      характеристиками и выгодной ценой. Они передают четкое детализированное
      изображение наблюдаемой сцены в высоком разрешении и обладают рядом мощных
      интеллектуальных функций, таких как обнаружение людей, режим
      конфиденциальности и двухсторонняя аудиосвязь. Информация с видеокамер
      синхронно отсылается на ваш смартфон, чтобы вы были в курсе происходящего.
      Эти видеокамеры широко используются для наблюдения на малых и средних
      объектах, таких как небольшие магазины.
    </p>
    <ul className="list-disc ml-6 flex flex-col gap-3">
      <li>1/2.7” CMOS</li>
      <li>Объектив 2.8 мм</li>
      <li>Механический ИК-фильтр</li>
      <li>Сжатие: H.265+, H.265, H.264+, H.264, MJPEG</li>
      <li>2 потока до 2Мп@25к/с</li>
      <li>
        Видеоаналитика: SMD Plus (интеллектуальный детектор движения), охрана
        периметра
      </li>
      <li>ИК-подсветка 30м</li>
      <li>Встроенный микрофон+динамик</li>
      <li>MicroSD до 256Гбайт</li>
      <li>Питание: 12В(DC)/PoE</li>
      <li>Wi-Fi 2.4ГГц</li>
    </ul>
  </div>,
  <div className="flex flex-col gap-3 py-10">
    <div className="flex gap-2 text-xl">
      <p>Объектив</p>
      <p className="font-bold">- Фикс. фокус</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Стандарт видеокамеры</p>
      <p className="font-bold"> - IP</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Фокусное расстояние</p>
      <p className="font-bold"> - 2.8 </p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>ИК-подсветка</p>
      <p className="font-bold">- Да</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Размер матрицы</p>
      <p className="font-bold"> - 1,2.7</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Скорость при макс.разр. кадр/сек</p>
      <p className="font-bold">- 25</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Количество мегапикселей</p>
      <p className="font-bold"> - 2 </p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Минимальная светочувствительность</p>
      <p className="font-bold">- 0.05 POE</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Класс защиты IP</p>
      <p className="font-bold">Нет</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Звук</p>
      <p className="font-bold">-Встроенный динамик , </p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Встроенный микрофон</p>
      <p className="font-bold">-Механический</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>ИК-фильтр</p>
      <p className="font-bold">-Да</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Ночной режим</p>
      <p className="font-bold">-Да</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Функции и особенности</p>
      <p className="font-bold">- ИК-фильтр</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Место установки камеры</p>
      <p className="font-bold">- Внутренняя</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Поддержка видеокодеков</p>
      <p className="font-bold">- H.264 , H.264+ , H.265 , H.265+ , MJPEG</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Питание</p>
      <p className="font-bold">- 12V DC </p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Антивандальность</p>
      <p className="font-bold">Нет</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Тип матрицы</p>
      <p className="font-bold">CMOS</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Тип подсветки</p>
      <p className="font-bold">- IR</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Беспроводная связь</p>
      <p className="font-bold"> - Wi-Fi</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Датчики</p>
      <p className="font-bold"> - Датчики</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Макс. разрешение видеокамеры</p>
      <p className="font-bold"> - 2560x1440</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Максимальная рабочая температура</p>
      <p className="font-bold">+45</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Минимальная рабочая температура</p>
      <p className="font-bold"> -10</p>
    </div>
    <div className="flex gap-2 text-xl">
      <p>Цвет корпуса</p>
      <p className="font-bold">- Белый</p>
    </div>
  </div>,
];

export default function Aboutproduct() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = about.length;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="border-y-2 border-gray-200 py-5 flex justify-between items-center">
          <p className="text-2xl">IP-камера Dahua DH-IPC-C4KP-P-0280B</p>
          <p className="text-gray-400">
            Код товара: <span className="text-black font-bold"> 584 51</span>
          </p>
        </div>
        <div className="py-10 flex justify-between w-full">
          <div className="w-full">
            <div className="relative w-2xl h-[500px]">
              <Image
                src={bigcameradahua}
                alt="bigcameradahua"
                className="absolute -top-20 left-12"
              ></Image>
              <div className="absolute top-0 left-0">
                <Image src={smalcameradahua} alt="smalcameradahua"></Image>
                <Image src={smalcameradahua2} alt="smalcameradahua2"></Image>
              </div>
            </div>
            <p className="text-xl text-white py-1 px-8 bg-blue-400 rounded-md w-fit">
              Гарантия 1 год
            </p>
          </div>
          <div className="w-xl">
            <ul className="flex-col flex gap-4 px-10">
              <li className="flex flex-col gap-2">
                <p className="text-gray-400">Тип камеры</p>
                <p className="text-black font-bold">IP-камера</p>
              </li>
              <li className="flex flex-col gap-2">
                <p className="text-gray-400">Активных пикселей</p>{" "}
                <p className="text-black font-bold">4 МП</p>
              </li>
              <li className="flex flex-col gap-2">
                <p className="text-gray-400">Размер матрицы</p>{" "}
                <p className="text-black font-bold">1/3</p>
              </li>
              <li className="flex flex-col gap-2">
                <p className="text-gray-400">Корпус</p>{" "}
                <p className="text-black font-bold">домашняя</p>
              </li>
              <li className="flex flex-col gap-2">
                <p className="text-gray-400">Поворотная</p>{" "}
                <p className="text-black font-bold">нет</p>
              </li>
              <li className="flex flex-col gap-2">
                <p className="text-gray-400">Объектив</p>{" "}
                <p className="text-black font-bold">есть</p>
              </li>
              <li className="flex flex-col gap-2">
                <p className="text-gray-400">Подсветка</p>{" "}
                <p className="text-black font-bold">ИК</p>
              </li>
              <li>
                <p className="text-blue-500">Все характеристики</p>{" "}
              </li>
            </ul>
          </div>
          <div className="w-2xl h-fit flex flex-col gap-7">
            <div className=" rounded-xl shadow-xl p-8">
              <div className="flex justify-end">
                <p className="text-gray-300 text-xl">870 сомони</p>
              </div>
              <div className="flex justify-between items-center text-sm pb-2">
                <p className="text-green-700">Новая цена</p>
                <p>Старая цена</p>
              </div>
              <div>
                <p className="text-2xl font-bold">677 сомони</p>
              </div>
              <div className="flex justify-between items-center pt-5">
                <button className="rounded-xl bg-blue-400 px-10 text-white py-3">
                  Добавить в корзину
                </button>
                <button className="border-2 border-black rounded-2xl p-3">
                  <Image src={lifeicon} alt="error"></Image>
                </button>
              </div>
            </div>{" "}
            <div className="flex justify-between items-center">
              <div>
                <p>Доставка по г. Душанбе</p>
                <p className="font-bold">Курьером</p>
              </div>
              <div>
                <p className="text-sm text-green-600 bg-gray-200 rounded-full w-fit px-2">
                  бесплатно
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-gray-300 my-2"></div>
          </div>
        </div>
        <div>
          <div className="flex gap-8 border-y-2 pt-5 border-gray-400">
            <button
              onClick={() => setCurrentIndex(0)}
              className={`text-xl pb-5 transition-all duration-300 ${
                currentIndex === 0
                  ? "text-blue-500 font-semibold border-b-4 border-blue-500"
                  : "text-black hover:text-blue-500"
              }`}
            >
              Описание
            </button>
            <button
              onClick={() => setCurrentIndex(1)}
              className={`text-xl pb-5 transition-all duration-300 ${
                currentIndex === 1
                  ? "text-blue-500 font-semibold border-b-4 border-blue-500"
                  : "text-black hover:text-blue-500"
              }`}
            >
              Характеристики
            </button>
          </div>

          <div className="relative overflow-hidden min-h-[300px]">
            <div
              className="transition-all duration-500 ease-in-out"
              key={currentIndex} // чтобы React понял, что компонент обновился
            >
              {about[currentIndex]}
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold text-2xl">Рекомендуем</p>
          <div className="flex justify-between pt-8 pb-28">
            <Cardproduct
              type={"main"}
              title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
              numberproduct={"100 121"}
              price={"278"}
              image={vabimagecart}
            ></Cardproduct>
            <Cardproduct
              type={"main"}
              title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
              numberproduct={"100 121"}
              price={"278"}
              image={vabimagecart}
            ></Cardproduct>
            <Cardproduct
              type={"main"}
              title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
              numberproduct={"100 121"}
              price={"278"}
              image={vabimagecart}
            ></Cardproduct>
            <Cardproduct
              type={"main"}
              title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
              numberproduct={"100 121"}
              price={"278"}
              image={vabimagecart}
            ></Cardproduct>
            <Cardproduct
              type={"main"}
              title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
              numberproduct={"100 121"}
              price={"278"}
              image={vabimagecart}
            ></Cardproduct>
            <Cardproduct
              type={"main"}
              title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
              numberproduct={"100 121"}
              price={"278"}
              image={vabimagecart}
            ></Cardproduct>
          </div>
        </div>
      </div>
    </>
  );
}
