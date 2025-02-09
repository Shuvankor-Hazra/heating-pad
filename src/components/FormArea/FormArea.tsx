import Image from 'next/image';
import clickHand from "../../assets/clickHand.gif";
import CountdownTimer2 from '../CountdownTimer2/CountdownTimer2';

const FormArea = () => {
    return (
        <div id='form-area'>
            <div className=' rounded-md py-8'>
                <h2 className='text-2xl text-black font-bold text-center'>এখানে কিনতে নিবন্ধন করুন</h2>
                <p className='text-sm font-bold text-black text-center'>পরে প্রচার শেষ হওয়ার কথা</p>

                {/* Countdown */}
                <CountdownTimer2 targetDate={"2025-02-28T23:59:59"} />

                {/* Form */}
                <div className='text-center'>
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

                <h2 className='text-sm text-black font-bold mx-4 text-center'>অর্ডার করার জন্য সমস্ত তথ্য পূরণ করুন, যদি আপনার কোন প্রশ্ন থাকে, আমাদের ফ্যানপেজের মাধ্যমে আমাদের সাথে যোগাযোগ করুন!!</h2>

                {/* Checkbox */}
                <div className='bg-white text-black px-3 py-2 rounded-[9px] m-4 space-y-2'>
                    <label className="flex items-center space-x-1">
                        <input type="checkbox"
                            className="form-checkbox text-blue-600 rounded" />
                        <span className='text-[14px]'>Buy 1 Product 2,299Tk + 100Tk Fee Shipping</span>
                    </label>
                    <label className="flex items-center space-x-1">
                        <input type="checkbox"
                            className="form-checkbox text-blue-600 rounded" />
                        <span className='text-[14px]'>Buy 2 Products 3,899Tk + Free Shipping</span>
                    </label>
                    <label className="flex items-center space-x-1">
                        <input type="checkbox"
                            className="form-checkbox text-blue-600 rounded" />
                        <span className='text-[14px]'>Buy 3 Products Get 1 Free 5,999Tk + Free Shipping</span>
                    </label>
                </div>

                {/* Button */}
                <div className="relative text-center overflow-hidden">
                    <button className="bg-black text-[#fda354] border-2 border-[#E5E7EB] text-xl font-semibold py-2 px-6 rounded-xl uppercase z-10">
                        Complete Registration
                    </button>
                    <Image
                        height={80}
                        width={80}
                        src={clickHand}
                        alt="Rotating GIF"
                        className="absolute right-9 -top-3 transform rotate-[123deg] cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default FormArea;