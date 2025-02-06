import Banner from "@/components/Banner/Banner";
import LuckyGift from "@/components/LuckyGift/LuckyGift";
import Luxurious from "@/components/Luxurious/Luxurious";
import Product from "@/components/Product/Product";
import SliderArea from "@/components/SliderArea/SliderArea";
import WomenValue from "@/components/WomenValue/WomenValue";

export default function Home() {
  return (
    <div className="max-w-[420px] mx-auto bg-[#bcd23e]">
      <Banner />
      <SliderArea />
      <WomenValue />
      <LuckyGift />
      <Luxurious />
      <Product />
    </div>
  );
}
