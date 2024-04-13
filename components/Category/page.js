"use client";

import CateList from "./CateList";
import { useDispatch, useSelector } from "react-redux";
import { listCate, setSearch } from "@/features/productsSlice";
import CateMb from "./CateMb";
export default function Category() {
    const dispatch = useDispatch();
    const active = useSelector((state) => state.products.presentCate);
    const cateItemArr = [
        { name: "Tất cả" },
        { name: "Nike" },
        { name: "Balenciaga" },
        { name: "Adidas" },
        { name: "Vans" },
    ];

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setSearch(""));
        dispatch(listCate(e.target.innerText));
    };

    return (
        <>
            <nav className="hidden lg:block">
                <h3 className="text-[1.6rem] font-[600] text-gray dark:text-main_white p-[1.6rem] mt-0 uppercase">
                    Danh mục
                </h3>
                <CateList
                    cateItems={cateItemArr}
                    onClick={handleClick}
                    cate={active}
                />
            </nav>
            <CateMb
                cateItems={cateItemArr}
                onClick={handleClick}
                cate={active}
            />
        </>
    );
}
