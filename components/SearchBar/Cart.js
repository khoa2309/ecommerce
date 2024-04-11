"use client";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import noCart from "@/public/img/no-cart.png";
import { useSelector } from "react-redux";
import { deleteCart } from "@/features/productsSlice";
import { useDispatch } from "react-redux";
export default function Cart() {
    const cart = useSelector((state) => state.products.cart);
    const dispatch = useDispatch();
    const cartHaveItem = cart.length >= 1;
    const handleDeleteCart = (name) => {
        dispatch(deleteCart(name));
    };
    return (
        <div className="lg:w-[15rem] text-center group h-full items-center flex justify-center">
            <div className="relative inline-block py-0 px-12 cursor-pointer">
                <FontAwesomeIcon
                    icon={faCartShopping}
                    className="change_text w-[3rem] h-[3rem]"
                />
                <span className="cart_quanlity">{cart.length}</span>
                <div
                    className={`cart_list group-hover:block ${
                        !cartHaveItem && "p-[2.4rem]"
                    }`}
                >
                    {cartHaveItem ? (
                        <>
                            <h4 className="text-left my-4 ml-[1.2rem] text-[1.4rem] text-heading_black font-semibold">
                                Sản phẩm đã thêm
                            </h4>
                            <ul className="list-none max-h-[50vh] overflow-y-auto">
                                {cart.map((item, index) => (
                                    <li
                                        className="flex hover:bg-zinc-100 dark:hover:bg-zinc-300"
                                        key={index}
                                    >
                                        <Image
                                            src={item.link}
                                            width={20}
                                            height={20}
                                            alt="product"
                                            className="w-[6.2rem] h-[6.2rem] m-[1.2rem] border-[1px] border-solid border-main_white"
                                        />
                                        <div className="flex mr-[1.2rem] flex-col justify-evenly w-full">
                                            <div className="flex items-center justify-between">
                                                <h5 className="cart_item_name">
                                                    {item.name}
                                                </h5>
                                                <div>
                                                    <span className="text-[1.4rem] text-primary">
                                                        {item.newPrice}
                                                    </span>
                                                    <span className="text-[0.9rem] text-gray mx-[0.4rem]">
                                                        x
                                                    </span>
                                                    <span className="text-[1.2rem] text-gray">
                                                        {item.quality}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-[1.2rem] text-gray">
                                                    {item.brand}
                                                </span>
                                                <span
                                                    className="text-[1.4rem] text-gray hover:cursor-pointer hover:text-primary"
                                                    onClick={() =>
                                                        handleDeleteCart(
                                                            item.name
                                                        )
                                                    }
                                                >
                                                    Xóa
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <a>
                                <button className="btn text-white bg-primary float-right m-[0_12px_12px_0] hover:bg-blue-700">
                                    Thanh toán
                                </button>
                            </a>
                        </>
                    ) : (
                        <>
                            <Image
                                src={noCart}
                                alt="no-cart"
                                className="no_cart lg:w-[40%]"
                                priority
                            />
                            <span className="text-[1.4rem] mt-[1.4rem] text-gray block">
                                Chưa có sản phẩm
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
