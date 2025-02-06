import Image from "next/image";
import img1 from "../../assets/women1.jpg"
import img2 from "../../assets/gallery3.jpg"
import img3 from "../../assets/slide4.jpg"
import img4 from "../../assets/womens.jpg"
import gift from "../../assets/giftBox.png"


const LuckyGift = () => {
    return (
        <>
            <div className="bg-[#bcd23e] text-black text-center py-10 ">
                <h2 className="text-xl font-bold my-5">মাসিকের অসহ্য ব্যথা ভালো করুন <br />বিনা ওষুধে</h2>
                <div className="flex justify-center items-center gap-2">
                    <h2 className="text-6xl font-bold px-2 py-5 bg-white inline-block">50%</h2>
                    <div className="">
                        <div className="flex justify-center items-center gap-2 border-2 border-white px-2">
                            <h3 className="text-[23px]"><del>2,500Tk</del></h3>
                            <span
                                style={{
                                    clipPath: "polygon(0 0, 0% 100%, 100% 50%)",
                                    display: "inline-block",
                                    width: "20px",
                                    height: "35px",
                                    backgroundColor: "#555",
                                    borderLeft: "2px solid #fff"
                                }}
                            ></span>
                            <h2 className="text-[25px]">1,250TK</h2>
                        </div>
                        <h2 className="text-xl text-left font-semibold mt-2">Only Today</h2>
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image src={img1} alt="Watch" layout="responsive" />
                <div className="absolute bottom-20 left-0 w-full">
                    <div className="bg-[#bcd23ecb] p-5 text-black">
                        <h2 className="text-xl font-medium">
                            ১০০% ইউনিক, অনন্য! পাচ্ছেন একমাত্র আমাদের কাছেই!! সব ধরনের পার্শ্বপ্রতিক্রিয়া মুক্ত!
                        </h2>
                    </div>
                </div>

            </div>
            <div className="bg-[#bcd23e] px-3 py-10">
                <div className="flex justify-center items-center gap-2 mb-2">
                    <div>
                        <Image src={img2} alt="Watch" layout="responsive" />
                    </div>
                    <div>
                        <Image src={img3} alt="Watch" layout="responsive" />
                    </div>
                </div>
                <div>
                    <Image src={img4} alt="Watch" layout="responsive" />
                </div>
            </div>
            <div className="relative pb-8">
                <div className="pt-3">
                    <h2 className="bg-[#edf0ff] text-[#008906] text-xl max-w-[360px] p-3 pr-10 ">পিরিয়ড পেইন কমানোর জন্য রিচার্জেবল হিটিং প্যাড</h2>
                    <div className="absolute -bottom-[32px] -right-12">
                        <Image alt="" src={gift} width={260} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LuckyGift;