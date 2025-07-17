import Image from "next/image";
import cardcart from "@/app/assets/icons/cardcart.svg";
import StarRating from "./StarRating";
import Link from "next/link";

export default function Maincart({
  icon,
  product,
  title,
  ratting,
  cashback,
  oldprice,
  discount,
  newprice,
  productnumber,
}) {
  return (
    <>
      <Link
        href={"#"}
        className="w-1/5 h-fit
       rounded-2xl bg-white relative"
      >
        
          <div className="flex justify-center items-center h-56 pt-8">
            <Image
              src={product}
              width={250}
              height={250}
              alt="vabimagecart"
            ></Image>
          </div>
          <div className="absolute top-2 right-5">
            <Image
              src={icon}
              width={100}
              height={100}
              alt="dahuaiconcart"
            ></Image>
          </div>
          <div></div>
          <div className="w-full flex flex-col gap-3 px-5 py-4">
            <p className="w-4/5">{title}</p>
            <StarRating rating={ratting}></StarRating>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-4">
                <p>
                  Кешбэк
                  <span className="text-red-500">{cashback}</span>
                </p>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="line-through text-gray-500 text-xl">
                      {oldprice}
                    </p>
                    <p className="text-white text-sm bg-red-500  px-2 rounded-full">
                      {discount}
                    </p>
                  </div>
                  <p className="text-2xl">{newprice}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-4">
                <p className="text-gray-500 text-right">
                  Код товара:
                  <br />
                  {productnumber}
                </p>
                <button className="bg-red-500 p-2 rounded-xl">
                  <Image src={cardcart} alt="cardcart"></Image>
                </button>
              </div>
            </div>
          </div>
        
      </Link>
    </>
  );
}
