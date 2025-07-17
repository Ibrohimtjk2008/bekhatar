import Image from "next/image";
import image1 from "@/app/assets/icons/image1.svg";
import image2 from "@/app/assets/icons/image2.svg";
import image3 from "@/app/assets/icons/image3.svg";
import image4 from "@/app/assets/icons/image4.svg";

export default function Stock() {
  return (
    <>
      <div className="bg-red-500">
        <div className="container mx-auto flex items-center gap-9 justify-center">
          <div className="flex items-center gap-5">
            <p className="bg-white p-1 rounded-3xl text-black font-extrabold w-fit">
              -30%
            </p>
            <div className="flex gap-5 items-center">
              <Image src={image2} alt="error"></Image>
              <Image src={image1} alt="error"></Image>
            </div>
          </div>
          <div>
            <p className="text-2xl text-white font-extrabold">
              ЛИКВИДАЦИЯ СКЛАДА
            </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex gap-7 items-center">
              <Image src={image3} alt="error"></Image>
              <Image src={image4} alt="error"></Image>
            </div>
            <p className="bg-white p-1 rounded-3xl text-black font-extrabold w-fit">
              -30%
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
