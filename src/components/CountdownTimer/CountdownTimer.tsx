"use client";
import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
    targetDate: string; // Accepts the target date as a string
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate).getTime() - new Date().getTime();
            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const padWithZero = (num: number) => num < 10 ? `0${num}` : num;

    return (
        <div className="text-white flex gap-3 justify-center items-center">
            <div className="flex flex-col items-center">
                <h2 className="border rounded-[7px] font-medium bg-white text-black text-[19px] w-[30px] h-[30px] flex items-center justify-center relative">
                    {padWithZero(timeLeft.days)}
                </h2>
                <h3 className="text-[.8em] absolute bottom-0 tracking-tighter">Days</h3>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="border rounded-[7px] font-medium bg-white text-black text-[19px] w-[31px] h-[30px] flex items-center justify-center relative">
                    {padWithZero(timeLeft.hours)}
                </h2>
                <h3 className="text-[.8em] absolute bottom-0 tracking-tighter">Hours</h3>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="border rounded-[7px] font-medium bg-white text-black text-[19px] w-[31px] h-[30px] flex items-center justify-center relative">
                    {padWithZero(timeLeft.minutes)}
                </h2>
                <h3 className="text-[.8em] absolute bottom-0 tracking-tighter">Minute</h3>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="border rounded-[7px] font-medium bg-white text-black text-[19px] w-[31px] h-[30px] flex items-center justify-center relative">
                    {padWithZero(timeLeft.seconds)}
                </h2>
                <h3 className="text-[.8em] absolute bottom-0 tracking-tighter">Seconds</h3>
            </div>
        </div>
    );
};

export default CountdownTimer;
