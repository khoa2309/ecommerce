"use client";

import { useState } from "react";
import CateList from "./CateList";
import { useDispatch } from "react-redux";
import { listCate, setSearch } from "@/features/productsSlice";
import CateMb from "./CateMb";
export default function Category() {
    const dispatch = useDispatch();
    const cateItemArr = [
        { name: "Tất cả", active: true },
        { name: "Nike", active: false },
        { name: "Balenciaga", active: false },
        { name: "Adidas", active: false },
        { name: "Vans", active: false },
    ];

    const [cateItems, setCateItems] = useState(cateItemArr);

    const handleClick = (e) => {
        e.preventDefault();
        const updatedCateItems = cateItems.map((item) => {
            if (item.name === e.target.innerText) {
                return { ...item, active: true };
            } else {
                return { ...item, active: false };
            }
        });
        dispatch(setSearch(""));
        dispatch(listCate(e.target.innerText));
        setCateItems(updatedCateItems);
    };

    return (
        <>
            <nav className="hidden lg:block">
                <h3 className="text-[1.6rem] font-[600] text-gray dark:text-main_white p-[1.6rem] mt-0 uppercase">
                    Danh mục
                </h3>
                <CateList cateItems={cateItems} onClick={handleClick} />
            </nav>
            <CateMb cateItems={cateItems} onClick={handleClick} />
        </>
    );
}
