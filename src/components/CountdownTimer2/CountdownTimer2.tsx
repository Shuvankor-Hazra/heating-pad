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

const styles = "border font-semibold bg-gray-800 text-white text-[22px] w-[56px] h-[55px] flex items-center justify-center rounded-xl";

const CountdownTimer2: React.FC<CountdownTimerProps> = ({ targetDate }) => {
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
        <div className="text-white flex gap-3 justify-center items-center my-2">
            <div className="flex gap-2 flex-col items-center">
                <h2 className={styles}>
                    {padWithZero(timeLeft.days)}
                </h2>
                <h3 className="text-sm text-black">Days</h3>
            </div>
            <div className="flex gap-2 flex-col items-center">
                <h2 className={styles}>
                    {padWithZero(timeLeft.hours)}
                </h2>
                <h3 className="text-sm text-black">Hours</h3>
            </div>
            <div className="flex gap-2 flex-col items-center">
                <h2 className={styles}>
                    {padWithZero(timeLeft.minutes)}
                </h2>
                <h3 className="text-sm text-black">Minute</h3>
            </div>
            <div className="flex gap-2 flex-col items-center">
                <h2 className={styles}>
                    {padWithZero(timeLeft.seconds)}
                </h2>
                <h3 className="text-sm text-black">Seconds</h3>
            </div>
        </div>
    );
};

export default CountdownTimer2;
