"use client";

import { useState } from "react";
import SortButton from "./SortButton";
import SortDropdown from "./SortDropDown";
import { sort } from "@/features/productsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SortBar() {
    const dispatch = useDispatch();
    const sortSelect = useSelector((state) => state.products.presentSort);
    const sortOption = [
        {
            text: "Đã thích",
            active: false,
        },
        {
            text: "Bán chạy",
            active: false,
        },
        {
            text: "Thấp đến cao",
            active: false,
        },
        {
            text: "Cao đến thấp",
            active: false,
        },
    ];
    sortOption[sortSelect].active = true;

    const handleClick = (e) => {
        dispatch(sort(e.target.innerText));
    };
    return (
        <>
            <div className="bg-sortbar_color dark:bg-main_white  hidden lg:flex items-center p-[1.2rem_2.2rem] rounded-[0.2rem]">
                <span className="text-[1.4rem] text-gray mr-[1.6rem]">
                    Sắp xếp theo
                </span>
                <SortButton option={sortOption[0]} onClick={handleClick} />
                <SortButton option={sortOption[1]} onClick={handleClick} />
                <SortDropdown
                    option={sortOption.slice(2, 4)}
                    onClick={handleClick}
                />
            </div>
            <ul className="lg:hidden sort_mb flex">
                {sortOption.map((item, index) => (
                    <li className="flex-1 sort-item" key={index}>
                        <a
                            className={`sort_mb_link cursor-pointer ${
                                index === sortSelect
                                    ? "text-primary"
                                    : "text-gray"
                            }`}
                            onClick={handleClick}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}
