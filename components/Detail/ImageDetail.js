"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ImageDetail({ link }) {
    const imgRef = useRef(null);
    const loopRef = useRef(null);

    useEffect(() => {
        function zoomImage() {
            const result = loopRef.current;
            imgRef.current.addEventListener("mousemove", function (e) {
                result.classList.remove("hidden");
                let x = (e.offsetX / this.offsetWidth) * 100;
                let y = (e.offsetY / this.offsetHeight) * 100;

                result.style.top = `${e.pageY}px`;
                result.style.left = `${e.pageX}px`;
                result.style.backgroundImage = `url("${this.src}")`;
                result.style.backgroundSize = `500px 500px`;
                result.style.backgroundRepeat = `no-repeat`;
                result.style.backgroundPosition = `${x}% ${y}%`;
                result.style.zIndex = `10`;
            });
            imgRef.current.addEventListener("mouseleave", function (e) {
                result.style = ``;
                result.classList.add("hidden");
            });
        }
        zoomImage();
    }, []);

    return (
        <div className="lg:col-span-3 col-span-1">
            <Image
                ref={imgRef}
                src={link}
                width={20}
                height={20}
                alt="product"
                className="w-full h-full object-cover rounded-lg"
            />
            <div className="result hidden" ref={loopRef}></div>
        </div>
    );
}
