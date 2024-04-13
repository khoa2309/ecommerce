"use client";

import {
    faCartShopping,
    faCheck,
    faLeftLong,
    faMinus,
    faMoneyBill,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { addToCart } from "@/features/productsSlice";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";
const ImageDetail = dynamic(() => import("./ImageDetail"));
export default function Detail() {
    const product = useSelector((state) => state.products.currentProduct);
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const popup = useRef(null);

    function renderStars(star) {
        const fullStars = [...Array(star)].map((_, index) => (
            <FontAwesomeIcon
                key={index}
                icon={solidStar}
                className="text-yellow-400 h-[0.8rem] "
            />
        ));
        const emptyStars = [...Array(5 - star)].map((_, index) => (
            <FontAwesomeIcon
                key={index}
                icon={farStar}
                className="text-gray-400 h-[0.8rem] dark:text-main_white"
            />
        ));
        return (
            <div className="flex items-center justify-evenly">
                {fullStars}
                {emptyStars}
            </div>
        );
    }

    function percentSale(oldPrice, newPrice) {
        const oldPriceNumber = Number(oldPrice.replace(/\./g, "").slice(0, -1));
        const newPriceNumber = Number(newPrice.replace(/\./g, "").slice(0, -1));
        const percentSale =
            ((oldPriceNumber - newPriceNumber) / oldPriceNumber) * 100;
        return percentSale.toFixed(0);
    }

    const handleMinus = () => {
        let currentValue = Number(inputRef.current.value);
        if (currentValue === 1) {
            return;
        }
        inputRef.current.value -= 1;
    };

    const handlePlus = () => {
        let currentValue = Number(inputRef.current.value);
        inputRef.current.value = currentValue + 1;
    };

    const handleAdd = () => {
        const div = document.createElement("div");
        div.setAttribute("class", "add-notice");
        div.innerHTML = `<span class="icon">🍕</span>
                <span class="text">Đã thêm vào giỏ hàng !</span>
                <div class="time"></div>`;
        popup.current.appendChild(div);
        div.classList.add("flex");
        div.classList.add("animate-slide_show");
        setTimeout(() => {
            div.classList.remove("animate-slide_show");
            div.classList.add("animate-slide_hide");
        }, 4000);
        setTimeout(() => {
            div.remove();
        }, 6000);
        dispatch(addToCart({ product, quality: inputRef.current.value }));
    };

    return (
        <>
            <Link
                href="/"
                className="btn inline-flex items-center justify-center font-semibold  gap-3 bg-primary text-white dark:text-main_white hover:text-gray transition-all duration-200"
            >
                <FontAwesomeIcon icon={faLeftLong} className="h-[1.5rem]" />
                Trở về trang chủ
            </Link>
            <div className="grid lg:grid-cols-8 grid-cols-1 min-h-[40rem] mt-[2rem] p-[1.5rem_1rem] rounded-[5px] detail_shadow mb-8">
                <ImageDetail link={product.link} />
                <div className="lg:col-span-5 col-span-1 ">
                    <div className="lg:product__col flex flex-col gap-6 relative pt-[3rem]">
                        <span className="product__liked flex items-center">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="h-[1.2rem] w-[1.2rem] mr-[5px]"
                            />
                            <span>Yêu thích</span>
                        </span>
                        <h1 className="product__name">{product.name}</h1>
                        <div className="flex items-center">
                            <div className="sale relative mr-[2rem]">
                                <span className="text-[#ee4d2d] leading-6">
                                    {`${percentSale(
                                        product.oldPrice,
                                        product.newPrice
                                    )}%`}
                                </span>
                                <span className="text-white leading-6">
                                    GIẢM
                                </span>
                            </div>
                            <div className="text-[2rem] font-semibold text-primary">
                                <span className="mr-[2rem]">
                                    {product.newPrice}
                                </span>
                                <span className="text-[1.7rem] line-through decoration-black dark:decoration-main_white">
                                    {product.oldPrice}
                                </span>
                            </div>
                        </div>
                        <div className="flex center items-center">
                            <div>
                                {renderStars(product.star)}
                                <div className="text-[1.2rem] font-semibold text-gray dark:text-main_white">
                                    Xuất xứ: {product.origin}
                                </div>
                            </div>
                            <div className="product__brand">
                                {product.brand}
                            </div>
                            <div className="ml-[5rem] font-semibold text-[1.4rem] cursor-pointer flex items-center gap-2 dark:text-main_white">
                                {product.liked ? (
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className="text-[#f63d30] h-[1.4rem]"
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={farHeart}
                                        className="text-[#f63d30] h-[1.4rem]"
                                    />
                                )}
                                Thích
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button
                                className="btn btn-minus text-white  hover:text-gray"
                                onClick={handleMinus}
                            >
                                <FontAwesomeIcon
                                    icon={faMinus}
                                    className="h-[1.4rem]"
                                />
                            </button>
                            <input
                                type="number"
                                value="1"
                                min="0"
                                className="quantity-input"
                                readOnly
                                ref={inputRef}
                            />
                            <button
                                className="btn btn-plus hover:text-gray text-white"
                                onClick={handlePlus}
                            >
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className="h-[1.4rem]"
                                />
                            </button>
                            <span className="product__sold dark:text-main_white">
                                {product.sold}
                            </span>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button
                                className="btn btn-add hover:text-gray text-white"
                                onClick={handleAdd}
                            >
                                <FontAwesomeIcon
                                    icon={faCartShopping}
                                    className="h-[1.4rem] mr-4"
                                />
                                Thêm vào giỏ hàng
                            </button>
                            <button className="btn btn-buy hover:text-gray text-white ">
                                <FontAwesomeIcon
                                    icon={faMoneyBill}
                                    className="h-[1.4rem] mr-4"
                                />
                                Mua ngay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup" ref={popup}></div>
        </>
    );
}
