import CountdownTimer from "../CountdownTimer/CountdownTimer";

const OfferCount = () => {
    return (
        <div className="p-3 text-center rounded-b-[60px] relative bg-red-600">
            <h2 className="text-xl font-bold text-[#eeff49]">50% Off will be Closed Soon</h2>
            <div className="flex items-center justify-center gap-5">
                <CountdownTimer targetDate={"2025-02-28T23:59:59"} />
                <a href="#form-area" className="bg-white text-black border-2 border-[#fff] text-lg font-medium py-1 px-5 rounded-xl animate-zoom-in-out mt-2">
                    Buy Now
                </a>
            </div>
        </div>
    );
};

export default OfferCount;