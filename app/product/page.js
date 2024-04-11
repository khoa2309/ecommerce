"use client";
import Card from "@/components/Card/page";
import Detail from "@/components/Detail/page";
import { useSelector } from "react-redux";

export default function Product() {
    const products = useSelector((state) => state.products.allProducts);

    return (
        <div className="wrap mt-[-3rem] lg:mt-[0.5rem]">
            <Detail />
            <div className="grid lg:pt-[3.6rem] lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-x-4 pb-[3.2rem]">
                <h3 className="text-center lg:col-span-5 md:col-span-3 col-span-2 text-[2.1rem] text-gray font-extrabold dark:text-main_white">
                    Lựa chọn hàng đầu
                </h3>
                {products?.map((item, index) => (
                    <div className="col-span-1" key={index}>
                        <Card product={item} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
}
