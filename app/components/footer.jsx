import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-[#1F2736]">
        <div className="container mx-auto">
          <div className="flex justify-between w-full h-auto pt-16 pb-40">
            <ul className="flex flex-col gap-3">
              <li>
                <Link href={"#"} className="text-white text-xl">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white text-xl">
                  Акции
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href={"#"} className="text-white text-xl">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white text-xl">
                  Партнерство
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white text-xl">
                  Наши дилеры
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href={"#"} className="text-white text-xl">
                  Обратная связь
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white text-xl">
                  Техническая поддержка
                </Link>
              </li>
            </ul>
            <div className="flex flex-col items-center">
              <div className="flex gap-5 items-center ">
                <div className="flex flex-col gap-1">
                  <p className=" text-white"> +(992) 44 625 4444</p>
                  <p className=" text-gray-400">SALES@DAHUA.TJ</p>
                </div>
                <button className="bg-red-500 text-xl text-white p-3 rounded-xl">
                  <p>Заказать звонок</p>
                </button>
              </div>
              <div className="w-80 h-px bg-gray-300 my-4"></div>
              <div>
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="p-3 bg-white rounded-l-xl w-36"
                />
                <button className="text-white bg-blue-400 rounded-r-xl py-3 px-6">
                  Подписаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
