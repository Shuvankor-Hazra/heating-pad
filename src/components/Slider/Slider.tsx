"use client";

import React, { useEffect } from "react";
import { MutableRefObject } from "react";
import {
    useKeenSlider,
    KeenSliderPlugin,
    KeenSliderInstance,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slider1 from "../../assets/slide1.jpg";
import slider2 from "../../assets/slide2.jpg";
import slider3 from "../../assets/slide3.jpg";
import slider4 from "../../assets/slide4.jpg";
// import slider5 from "../../assets/slide5.jpg";
// import slider6 from "../../assets/slide6.jpg";
// import slider7 from "../../assets/slide7.png";
// import slider8 from "../../assets/slide8.jpg";
import Image from "next/image";

function ThumbnailPlugin(
    mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active");
            });
        }
        function addActive(idx: number) {
            slider.slides[idx].classList.add("active");
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx);
                });
            });
        }

        slider.on("created", () => {
            if (!mainRef.current) return;
            addActive(slider.track.details.rel);
            addClickEvents();
            mainRef.current.on("animationStarted", (main) => {
                removeActive();
                const next = main.animator.targetIdx || 0;
                addActive(main.track.absToRel(next));
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
            });
        });
    };
}

export default function Slider() {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true, // Enable looping for seamless autoplay
    });

    const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    );

    // Autoplay logic for the main slider
    useEffect(() => {
        const interval = setInterval(() => {
            instanceRef.current?.next(); // Move to the next slide
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [instanceRef]);

    return (
        <div className="mx-5 py-5">
            {/* Main Slider */}
            <div ref={sliderRef} className="keen-slider mb-3">
                {[
                    slider1,
                    slider2,
                    slider3,
                    slider4,
                    // slider5,
                    // slider6,
                    // slider7,
                    // slider8,
                ].map((src, index) => (
                    <div key={index} className="keen-slider__slide">
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="slider-image"
                        />
                    </div>
                ))}
            </div>

            {/* Thumbnail Slider */}
            <div ref={thumbnailRef} className="keen-slider thumbnail">
                {[
                    slider1,
                    slider2,
                    slider3,
                    slider4,
                    // slider5,
                    // slider6,
                    // slider7,
                    // slider8,
                ].map((src, index) => (
                    <div key={index} className="keen-slider__slide">
                        <Image
                            src={src}
                            alt={`Thumbnail ${index + 1}`}
                            className="thumbnail-image rounded-xl opacity-80"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
