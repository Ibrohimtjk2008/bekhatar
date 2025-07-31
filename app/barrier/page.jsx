import Image from "next/image";
import Header from "../components/Header";
import Stock from "../components/stock";
import Cardproduct from "../components/cardproduct";
import Footer from "../components/footer";
import vabimagecart from "@/app/assets/image/vabimagecart.png";
import barrierimage from "@/app/assets/image/barrierimage.png";

export default function Barrier() {
  return (
    <>
      <Stock></Stock>
      <Header></Header>
      <div className="w-full h-px bg-gray-300 my-2 container mx-auto"></div>
      <div className="container mx-auto py-10">
        <div className="w-full h-full relative">
          <Image src={barrierimage} alt="error" className="w-full"></Image>
          <div className="absolute bottom-0 bg-red-600 w-lg h-full  px-4 left-28">
            <p className="text-white text-8xl font-bold left-16 absolute bottom-14 ">
              Шлаг-<br />баумы
            </p>
          </div>
        </div>{" "}
        <p className="text-3xl py-10 font-bold">Рекомендуем</p>
        <div className="flex flex-wrap gap-12">
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
          <Cardproduct
            title={"IPC-HFW2239S-SA-LED-S2 Цилиндрическая IP-видеокамера"}
            numberproduct={"100 121"}
            price={"278"}
            image={vabimagecart}
          ></Cardproduct>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
