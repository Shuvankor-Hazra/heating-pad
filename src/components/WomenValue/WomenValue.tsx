import Image from "next/image";
// import stone from "../../assets/stone.jpg";
import img1 from "../../assets/women1.jpg";
import img2 from "../../assets/women2.jpg";

const WomenValue = () => {
    return (
        <>
            <h2 className="text-[22px] text-center py-5 my-5 text-black">
                মেনস্ট্রুয়াল হিটিং ও ভাইব্রেটিং প্যাড <br />২-ইন-১। পিরিয়ড পেইন কমানোর জন্য রিচার্জেবল হিটিং প্যাড
            </h2>
            <div className="relative">
                <Image src={img1} alt="Watch" layout="responsive" />
                <div className="absolute bottom-[70px] left-0 w-full">
                    <div className="bg-[#ffc0cbd4] p-5 text-black">
                        <h2 className="text-xl font-medium">
                            ১০০% ইউনিক, অনন্য! পাচ্ছেন একমাত্র আমাদের কাছেই!! সব ধরনের পার্শ্বপ্রতিক্রিয়া মুক্ত!
                        </h2>
                    </div>
                </div>
            </div>
            <div>
                <Image src={img2} alt="" />
                <div className="bg-[#f9f9f948] p-5 text-black">
                    <h2 className="text-xl font-medium">
                        ১০০% ইউনিক, অনন্য! পাচ্ছেন একমাত্র আমাদের কাছেই!! সব ধরনের পার্শ্বপ্রতিক্রিয়া মুক্ত!
                    </h2>
                </div>
            </div>
        </>
    );
};

export default WomenValue;
