import Image from "next/image";
import Header from "../components/Header";
import Stock from "../components/stock";
import Cardproduct from "../components/cardproduct";
import Footer from "../components/footer";
import vabimagecart from "@/app/assets/image/vabimagecart.png";
import monitorimage from "@/app/assets/image/monitorimage.png";

export default function Monitor() {
  return (
    <>
      <Stock></Stock>
      <Header></Header>
      <div className="w-full h-px bg-gray-300 my-2 container mx-auto"></div>
      <div className="container mx-auto py-10">
        <div className="w-full h-full">
          <Image src={monitorimage} alt="error" className="w-full"></Image>
        </div>
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
