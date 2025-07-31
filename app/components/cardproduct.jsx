import lifeicon from "@/app/assets/icons/lifeicon.svg";
import Image from "next/image";

export default function Cardproduct({
  type,
  title,
  price,
  image,
  numberproduct,
}) {
  return (
    <>
      <div className="py-5">
        <div className="flex flex-col gap-3 relative w-54 m x-3">
          {type === "main" ? (
            <button className="absolute top-2 right-2">
              <Image src={lifeicon} alt="error"></Image>
            </button>
          ) : null}
          <div className="py-2 flex justify-center items-center">
            <Image src={image} alt="error"></Image>
          </div>
          {type === "main" ? (
            <p className="text-blue-400 text-xl">{price} сомони.</p>
          ) : (
            <p className="font-bold text-xl">{price} с.</p>
          )}
          <p className={type === "main" ? "font-bold" : null}>{title}</p>
          {type === "main" ? (
            <p className="text-gray-500">Код товара: {numberproduct}</p>
          ) : null}
          <button className="text-white  w-full bg-blue-500 py-1 rounded-md">
            В корзину
          </button>
        </div>
      </div>
    </>
  );
}
