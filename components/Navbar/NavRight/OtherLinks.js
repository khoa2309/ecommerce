import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import app_store from "@/public/img/app_store.png";
import gg_play from "@/public/img/gg_play.png";
import app_gallery from "@/public/img/app_gallery.png";
export default function OtherLinks({ links }) {
    const appLinks = [
        {
            src: app_store,
            alt: "app store",
            name: " Ứng dụng đã có trên App Store",
        },
        {
            src: gg_play,
            alt: "gg_play",
            name: " Ứng dụng đã có trên Google Play",
        },
        {
            src: app_gallery,
            alt: "app_gallery",
            name: " Ứng dụng đã có trên App Gallery",
        },
    ];
    return (
        <>
            {links.map((item, index) => (
                <li
                    className={`nav-item fade_text ${
                        item.noti ? "relative group" : ""
                    }`}
                    key={index}
                >
                    <a className="nav-link" href="">
                        <FontAwesomeIcon
                            icon={item.icon}
                            className={item.className}
                        />
                        {item.text}
                    </a>
                    {item.noti && (
                        <div className="notify group-hover:block bg-white z-20">
                            <header className="h-[4rem]">
                                <h3 className="ml-[1.2rem] text-heading_black text-[1.4rem] font-normal leading-[4rem]">
                                    Thông báo mới nhận
                                </h3>
                            </header>
                            <ul>
                                {appLinks.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href=""
                                            className="flex p-[1.2rem] no-underline noti_color"
                                        >
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                className="w-[4.8rem] object-contain"
                                            />
                                            <div className="ml-[1.2rem] flex flex-col justify-around">
                                                <span className="block text-[1.4rem] text-gray font-light">
                                                    {item.name}
                                                </span>
                                                <span className="block text-[1.2rem] text-heading_black">
                                                    {item.name}
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <footer className="text-center">
                                <a
                                    href=""
                                    className="py-[0.8rem] font-semibold block text-gray"
                                >
                                    Xem tất cả
                                </a>
                            </footer>
                        </div>
                    )}
                </li>
            ))}
        </>
    );
}
