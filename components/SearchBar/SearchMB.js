"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search, setSearch } from "@/features/productsSlice";
import { useRouter } from "next/navigation";

export default function SearchMB({ isOpen }) {
    const inputValue = useSelector((state) => state.products.inputSearch);
    const searchHistory = useRef(null);
    const searchInput = useRef(null);
    const router = useRouter();
    const dispatch = useDispatch();
    function handleFocus() {
        searchHistory.current.classList.remove("hidden");
    }
    function handleBlur() {
        setTimeout(() => {
            searchHistory.current.classList.add("hidden");
        }, 200);
    }
    function handleClick(e) {
        e.preventDefault();
        dispatch(setSearch(e.target.innerText));
        dispatch(search(e.target.innerText));
        router.push("/");
    }
    function handleChange(e) {
        dispatch(setSearch(e.target.value));
        dispatch(search(e.target.value));
        router.push("/");
    }
    return (
        <div className={`search_mb ${isOpen ? "flex" : "hidden"} md:hidden`}>
            <div className="h-full flex-1 relative">
                <input
                    ref={searchInput}
                    type="text"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onInput={handleChange}
                    value={inputValue}
                    placeholder="Air Force 1 White Black Đen Trắng Siêu Cấp"
                    className="w-full h-full border-none outline-none text-[1.4rem] text-gray py-0 px-6 rounded-[0.3rem] change_mode"
                />
                <div
                    ref={searchHistory}
                    className="absolute top-full left-0 w-[90%] change_mode rounded-[0.3rem] shadow-[0_1px_5px_#999] overflow-hidden z-10 hidden"
                >
                    <h3 className="my-[0.6rem] mx-[1.2rem] text-[1.4rem] text-heading_black font-bold">
                        Lịch sử tìm kiếm
                    </h3>
                    <ul className="list-none mt-[0.6rem]">
                        <li
                            className="py-4 px-[1.2rem] hover:cursor-pointer hover:bg-zinc-300 transition duration-100"
                            onClick={handleClick}
                        >
                            <a className="text-[1.4rem] font-medium text-gray">
                                Air Jordan 1 Low Vintage Grey
                            </a>
                        </li>
                        <li
                            className="py-4 px-[1.2rem] hover:cursor-pointer hover:bg-zinc-300 transition duration-100"
                            onClick={handleClick}
                        >
                            <a className="text-[1.4rem] font-medium text-gray">
                                Air Jordan 1 Mid Smoke Grey
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <button className="bg-primary border-none md:h-[3.4rem] h-full rounded-[0.3rem] w-[6rem] outline-none md:mr-[0.3rem] mr-0 flex justify-center items-center hover:bg-blue-700">
                <FontAwesomeIcon
                    icon={faSearch}
                    className="text-white w-[1.8rem] h-[1.8rem]"
                />
            </button>
        </div>
    );
}
