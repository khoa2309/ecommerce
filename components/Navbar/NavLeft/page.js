import QRCode from "./QRcode";
import AppLinks from "./AppLinks";
import SocialLinks from "./SocialLinks";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import qr_code from "@/public/img/qr_code.jpg";
import app_store from "@/public/img/app_store.png";
import gg_play from "@/public/img/gg_play.png";
import app_gallery from "@/public/img/app_gallery.png";

export default function NavBarLeft() {
    const appLinks = [
        { src: app_store, alt: "app store", className: "ml-[1.1rem]" },
        { src: gg_play, alt: "gg_play", className: "mr-[11px]" },
        { src: app_gallery, alt: "app_gallery", className: "ml-[11px]" },
    ];

    const socialLinks = [
        {
            href: "https://www.facebook.com/khoa1midside/",
            className: "flex items-center",
            icon: faFacebook,
            iconClassName: "h-[1.8rem] fade_text",
        },
        {
            href: "https://www.instagram.com/khoa_infp/",
            className: " flex items-center",
            icon: faInstagram,
            iconClassName: "h-[2.2rem] fade_text relative top-[1px]",
        },
    ];

    return (
        <ul className="nav">
            <li className="nav-item separate group fade_text">
                Vào ứng dụng K-Shop
                <div className="absolute w-[18.6rem] change_mode top-full left-0 p-[0.8rem] rounded-sm animate-fadeIn shadow-[0_-1px_2px_rgba(0,0,0,0.1)] hidden group-hover:block">
                    <QRCode src={qr_code} alt="QR code" priority />
                    <AppLinks links={appLinks} />
                </div>
            </li>

            <li className="nav-item gap-[0.8rem]">
                <span className="cursor-text">Kết nối</span>
                <SocialLinks links={socialLinks} />
            </li>
        </ul>
    );
}
