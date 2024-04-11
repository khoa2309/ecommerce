import Col from "./Col";
import app_store from "@/public/img/app_store.png";
import gg_play from "@/public/img/gg_play.png";
import app_gallery from "@/public/img/app_gallery.png";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const appLinks = [
        { src: app_store, alt: "app store", className: "h-[1.8rem] w-full" },
        { src: gg_play, alt: "gg_play", className: "h-[1.8rem] w-full" },
        {
            src: app_gallery,
            alt: "app_gallery",
            className: "h-[1.8rem] w-full",
        },
    ];

    const colData = [
        {
            heading: "Chăm sóc khách hàng",
            items: ["Trung tâm trợ giúp", "Shop Mall", "Hướng dẫn mua hàng"],
        },
        {
            heading: "Giới thiệu",
            items: ["Giới thiệu", "Tuyển dụng", "Điều khoản"],
        },
        {
            heading: "Danh mục",
            items: ["Adidas", "Nike", "Vans"],
        },
        {
            heading: "Theo dõi",
            items: ["Facebook", "Instagram", "Linkedin"],
            icons: [
                {
                    name: faFacebook,
                    link: "https://www.facebook.com/khoa1midside/",
                },
                {
                    name: faInstagram,
                    link: "https://www.instagram.com/khoa_infp/",
                },
                {
                    name: faLinkedin,
                    link: "https://www.linkedin.com/in/khoa230902/",
                },
            ],
        },
        {
            heading: "Vào cửa hàng trên ứng dụng",
            appLinks: appLinks,
        },
    ];
    return (
        <footer className="footer">
            <div className="wrap">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 text-center md:text-left">
                    {colData.map((item, index) => (
                        <Col key={index} data={item} />
                    ))}
                </div>
            </div>
            <div className="gradient_color_footer dark:dark_color py-[1.6rem] px-0 mt-12">
                <div className="wrap">
                    <p className="text-center change_text text-[1.4rem]">
                        Khoa.dev 😎 Xây dựng với niềm đam mê 😍
                    </p>
                </div>
            </div>
        </footer>
    );
}
