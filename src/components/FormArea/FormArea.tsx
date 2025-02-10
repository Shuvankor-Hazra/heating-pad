import Image from 'next/image';
import clickHand from "../../assets/clickHand.gif";
import CountdownTimer2 from '../CountdownTimer2/CountdownTimer2';

const FormArea = () => {
    return (
        <div id='form-area'>
            <div className='text-gray-800 rounded-md pt-10'>
                <h2 className='text-2xl font-bold text-center mb-2'>এখানে কিনতে নিবন্ধন করুন</h2>
                <p className='font-bold text-center'>পরে প্রচার শেষ হওয়ার কথা</p>

                {/* Countdown */}
                <CountdownTimer2 targetDate={"2025-02-28T23:59:59"} />

                {/* Form */}
                <div className='text-center '>
                    <input
                        type="text"
                        placeholder="Full name"
                        className="border-none outline-none rounded-lg w-[90%] px-3 py-2 mb-3 placeholder-gray-600 text-sm"
                    />
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="border-none outline-none rounded-lg w-[90%] px-3 py-2 mb-3 placeholder-gray-600 text-sm"
                    />
                    <input
                        type="text"
                        placeholder="Specific address"
                        className="border-none outline-none rounded-lg w-[90%] px-3 py-2 mb-3 placeholder-gray-600 text-sm"
                    />
                </div>

                <h2 className='text-sm font-bold mx-4 mt-2 text-center'>অর্ডার করার জন্য সমস্ত তথ্য পূরণ করুন, যদি আপনার কোন প্রশ্ন থাকে, আমাদের ফ্যানপেজের মাধ্যমে আমাদের সাথে যোগাযোগ করুন!!</h2>

                {/* Checkbox */}
                <div className="bg-white px-3 py-2 rounded-lg m-4 space-y-2">
                    <label className="flex items-center gap-2">
                        <input type="radio" name="product" />
                        <span className="text-sm">Buy 1 Product 1250Tk+100Tk Shipping Charge</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="product" />
                        <span className="text-sm">Buy 2 Products 2500Tk+Free Shipping Charge</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="product" />
                        <span className="text-sm">Buy 3 Products 3650Tk+Free Shipping Charge</span>
                    </label>
                </div>

                {/* Button */}
                <div className="relative text-center overflow-hidden pb-5">
                    <button className="bg-gray-800 text-[#fff] border-2 border-[#E5E7EB] text-xl font-semibold py-2 px-6 rounded-xl tracking-wider z-10">
                        Complete Registration
                    </button>
                    <Image
                        height={80}
                        width={80}
                        src={clickHand}
                        alt="Rotating GIF"
                        className="absolute right-12 -top-2 transform rotate-[123deg] cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default FormArea;