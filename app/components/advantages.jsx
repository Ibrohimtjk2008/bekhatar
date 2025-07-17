import Image from "next/image";
import car from "@/app/assets/icons/car.svg";
import phone from "@/app/assets/icons/phone.svg";
import bonus from "@/app/assets/icons/bonus.svg";
import pas from "@/app/assets/icons/pas.svg";
import sertificat from "@/app/assets/icons/sertificat.svg";

export default function Advantages() {
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full px-10 py-10">
          <ul className="flex justify-between items-center">
            <li>
              <div className="flex flex-col gap-2 items-center">
                <Image src={car} alt="car"></Image>
                <p className="text-center text-gray-400">
                  Бесплатная <br />
                  доставка
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2 items-center">
                <Image src={bonus} alt="car"></Image>
                <p className="text-center text-gray-400">
                  Бонусы <br />
                  за покупку
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2 items-center">
                <Image src={phone} alt="car"></Image>
                <p className="text-center text-gray-400">
                  Гарантийное и <br />
                  послегарантийное <br />
                  обслуживание
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2 items-center">
                <Image src={sertificat} alt="car"></Image>
                <p className="text-center text-gray-400">
                  Гарантированный <br />
                  возврат и обмен
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2 items-center">
                <Image src={pas} alt="car"></Image>
                <p className="text-center text-gray-400">
                  Сертифицированные <br />
                  товары
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
