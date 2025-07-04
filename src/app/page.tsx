import Image from "next/image";
import { Footer } from "@/components/footer";
import { Carousel } from "@/components/carousel";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex justify-center items-center bg-background w-full h-full">
        <Carousel></Carousel>
      </div>
      <Footer></Footer>
    </div>
  );
}
