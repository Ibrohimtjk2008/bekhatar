import dahua from "@/app/assets/image/dahua.png";
import dahuaicon from "@/app/assets/icons/dahuaicon.svg";
import Image from "next/image";

export default function Dahua_image() {
  return (
    <>
      <div className="container mx-auto">
        <div className="py-5 w-full h-auto flex flex-col">
          <div className="relative">
            <Image src={dahua} alt="alhua image" className="w-full"></Image>
            <Image
              src={dahuaicon}
              alt="alhua icon"
              className="absolute top-1 left-5"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
