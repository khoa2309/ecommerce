"use client";

import Card from "@/components/Card/page";
import Category from "@/components/Category/page";
import SortBar from "@/components/SortBar/page";
import { useSelector } from "react-redux";

export default function Home() {
    const products = useSelector((state) => state.products.presentProducts);

    return (
        <div className="wrap lg:pt-[3.6rem] grid grid-cols-12">
            <div className="lg:col-span-2 col-span-12">
                <Category />
            </div>
            <div className="lg:col-span-10 col-span-12 pb-[3.2rem]">
                <SortBar />
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-x-4">
                    {products?.map((item, index) => (
                        <div className="col-span-1" key={index}>
                            <Card product={item} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
