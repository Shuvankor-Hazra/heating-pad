import Image from 'next/image';
import img1 from "../../assets/gallery1.jpg";
import img2 from "../../assets/gallery2.jpg";
import img3 from "../../assets/gallery3.jpg";
import Slider from '../Slider/Slider';

const SliderArea = () => {
    return (
        <div className='mt-10 text-center'>
            <h2 className="text-[#008906cc] text-4xl font-medium">Menstrual Heating</h2>
            <h3 className="text-[#f1513f] text-3xl font-medium leading-loose"> & Vibrating Pad</h3>
            <h4 className="text-[#006b05] text-xl m-3 mt-0 p-2 bg-[#edf0ff] rounded-full">5.0 ⭐ | 5,790 Rating | 7,890 Sold
            </h4>
            <Slider />
            <h2 className='text-[24px] font-bold text-gray-800 mx-3 my-10'>
            পিরিয়ডের ব্যথা ভালো করুন <br /> এখন বিনা ঔষধেই! <br /> ব্যবহার করুন <br /> আমাদের এই অসাধারণ পন্যটি!!
            </h2>
            <div className='relative mx-3 my-5 h-[480px]'>
                <Image className='border-2 border-white absolute top-0 left-14' alt='' src={img1} width={255} height={165} />
                <Image className='border-2 border-white absolute bottom-0' alt='' src={img2} width={240} height={165} />
                <Image className='border-2 border-white absolute right-0 bottom-12  ' alt='' src={img3} width={230} height={140} />
            </div>
        </div>
    );
};

export default SliderArea;