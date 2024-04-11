"use client";

import { setCurrentProduct, setSearch } from "@/features/productsSlice";
import ImageComponent from "./ImageThumb";
import ProductInfo from "./ProductInfo";
import Link from "next/link";
import { useDispatch } from "react-redux";
export default function Card({ product, index }) {
    const { link, ...others } = product;
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setCurrentProduct({ ...product }));
        dispatch(setSearch(""));
    };
    return (
        <Link href="/product" className="card group" onClick={handleClick}>
            <div className="overflow-hidden">
                <ImageComponent link={link} />
            </div>
            <ProductInfo product={others} />
        </Link>
    );
}
