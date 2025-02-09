import Image from "next/image";
import img1 from "../../assets/gallery1.jpg"


const styles = "relative pl-6 before:content-[''] before:absolute before:top-2 before:left-0  before:w-4 before:h-4 before:bg-[#008906] before:[clip-path:polygon(50%_0,100%_25%,50%_100%,0_25%)] text-lg"
const Product = () => {
    return (
        <div className='mt-10 text-black'>
            <h2 className='text-3xl font-bold text-center '>পণ্য তথ্য</h2>
            <div className="p-5">
                <p className={styles} >
                    <span className="font-semibold text-base">রঙ:</span> গোলাপী
                </p>
                <p className={styles}>
                    <span className="font-semibold text-base">ব্যথার জন্য উপকারী:</span> পেট, পিট, পা এবং উরুতে ব্যথা কমাতে সহায়ক
                </p>
                <p className={styles}>
                    <span className="font-semibold text-base">মাসেল পেইন:</span> বিভিন্ন ধরনের মাসল পেইন কমাতে কার্যকর
                </p>
                <p className={styles}>
                    <span className="font-semibold text-base">ব্যাটারি ব্যাকআপ:</span> একবার চার্জে ৪ ঘন্টা পর্যন্ত ব্যবহৃত হতে পারে
                </p>
                <p className={styles}>
                    <span className="font-semibold text-base">ভাইব্রেশন ম্যাসাজ মোডস:</span> ৪ টি ভিন্ন ভিন্ন মোড
                </p>
                <p className={styles}>
                    <span className="font-semibold text-base">হিটিং টেম্পারেচার মোডস:</span> ৩ টি তাপমাত্রা অপশন
                </p>
                <h2 className="text-lg mt-5">
                    এই হিটিং প্যাডটি মাসিক ব্যথা, মাসল পেইন এবং অন্যান্য ব্যথা কমাতে অত্যন্ত কার্যকর
                </h2>
            </div>
            <div>
                <Image src={img1} alt="Watch" layout="responsive" />
            </div>
        </div >
    );
};

export default Product;