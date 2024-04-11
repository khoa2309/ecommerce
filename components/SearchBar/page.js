"use client";

import Cart from "./Cart";
import Search from "./Search";
import Logo from "./Logo";
import logo from "@/public/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SearchMB from "./SearchMB";
import Link from "next/link";

export default function SearchBar() {
    const [isMBSearchOpen, setIsMBSearchOpen] = useState(false);
    const logoInfo = {
        logo,
        alt: "logo",
        className: "h-full lg:w-[15rem] w-full object-cover",
    };
    return (
        <div className="lg:h-[9.4rem] h-[6.8rem] flex items-center py-0 px-2 md:justify-normal justify-between">
            <label
                htmlFor="mb-search-checkbox"
                className="md:hidden block"
                onClick={() => setIsMBSearchOpen(!isMBSearchOpen)}
            >
                <FontAwesomeIcon
                    icon={faSearch}
                    className="text-white px-[1.2rem] text-[2.2rem]"
                />
            </label>
            <SearchMB isOpen={isMBSearchOpen} />
            <Link className="logo" href="/">
                <Logo logoInfo={logoInfo} />
            </Link>
            <Search />
            <Cart />
        </div>
    );
}
