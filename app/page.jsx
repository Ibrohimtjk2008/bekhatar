import Image from "next/image";
import Dahua_image from "./components/Dahua_image";
import Dahua_leader from "./components/Dahua_leader";
import Header from "./components/Header";
import Stock from "./components/stock";
import Store_brands from "./components/Store_brands";
import vabs from "@/app/assets/image/vabs.png";
import maintiandyimage from "@/app/assets/image/maintiandyimage.png";
import Tiandy_leader from "./components/Tiandy_leader";
import Salto_leader from "./components/Salto_leader";
import mainsaltoimage from "@/app/assets/image/mainsaltoimage.png";
import Xiaomi_leader from "./components/Xiaomi_leader";
import mainmiimage from "@/app/assets/image/mainmiimage.png";
import Advantages from "./components/advantages";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Stock></Stock>
      <Header type={"main"}></Header>
      <div
        className="w-full h-auto"
        style={{
          background:
            "linear-gradient(110.96deg, #FFEBDF 8.54%, #FFFAE7 50%, #E6E9FD 91.46%)",
        }}
      >
        <Dahua_image></Dahua_image>
        <Store_brands></Store_brands>
        <Dahua_leader></Dahua_leader>
        <div className="container mx-auto ">
          <Image src={vabs} alt="image" className="w-full"></Image>
        </div>
        <Tiandy_leader></Tiandy_leader>
        <div className="container mx-auto ">
          <Image
            src={maintiandyimage}
            alt="maintiandyimage"
            className="w-full"
          ></Image>
        </div>
        <Salto_leader></Salto_leader>
        <div className="container mx-auto ">
          <Image
            src={mainsaltoimage}
            alt="mainsaltoimage"
            className="w-full"
          ></Image>
        </div>
        <Xiaomi_leader></Xiaomi_leader>
        <div className="container mx-auto pb-10">
          <Image src={mainmiimage} alt="mainmiimage" className="w-full"></Image>
        </div>
      </div>
      <Advantages></Advantages>
      <Footer></Footer>
    </>
  );
}
