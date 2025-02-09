"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import bgImg from '../../assets/banner.jpg';
import OfferCount from '../OfferCount/OfferCount';

const Banner = () => {
    const [isStuck, setIsStuck] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const banner = document.querySelector('.sticky-banner');
            if (banner) {
                const rect = banner.getBoundingClientRect();
                if (rect.bottom <= window.innerHeight + 20) {
                    setIsStuck(true);
                } else {
                    setIsStuck(false);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="w-full relative">
                <Image
                    alt="Banner image"
                    src={bgImg}
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
            <div className={`sticky-banner transition-all duration-300 ${isStuck ? 'fixed bottom-5' : ''} sticky top-0 bg-white z-10 rounded-b-[60px]`}>
                <OfferCount />
            </div>
        </>
    );
};

export default Banner;
