import Image from "next/image";
import img1 from "../../assets/luxurious1.jpg";
import img2 from "../../assets/luxurious2.jpg";
import img3 from "../../assets/slide1.jpg";
import img4 from "../../assets/gallery2.jpg";

const Luxurious = () => {
    return (
        <>
            <div className="relative">
                <div className="text-gray-800">
                    <h2 className="text-4xl font-bold mt-10 text-center">Portable & Cordless
                        Hitting Pad</h2>
                </div>
                <div className="py-10">
                    <Image className="w-80 mx-auto mb-5" src={img1} alt="" />
                    <Image className="w-64" src={img2} alt="" />
                </div>
                <div className=" p-5 m-5 text-[#008906]">
                    <h2 className="text-xl">এই ২-ইন-১ রিচার্জেবল হিটিং প্যাডটি মাসিক ব্যথা কমাতে সহায়ক</h2>
                    <br />
                    <h2 className="text-xl">এটি গরম এবং ভাইব্রেশন সুবিধা প্রদান করে, যা শরীরে আরাম এবং ব্যথা উপশমে সাহায্য করে</h2>
                </div>
                <Image
                    className="absolute rounded-full right-5 bottom-52 animate-upDown"
                    src={img3}
                    alt=""
                    width={117}
                    height={117}
                />
            </div>
            <div className="p-5 flex items-center gap-3">
                <h2 className="text-[22px] text-right m-3 text-[#008906]">
                    সহজেই ব্যবহারযোগ্য পুনরায় চার্জ করা যায়
                </h2>
                {/* Image Section */}
                <Image
                    className="w-[200px] h-[150px]"
                    src={img4}
                    alt=""
                ></Image>
            </div>
        </>
    );
};

export default Luxurious;
