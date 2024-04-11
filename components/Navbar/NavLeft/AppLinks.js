import Image from "next/image";

export default function AppLinks({ links }) {
    return (
        <div className="flex flex-wrap justify-between gap-2">
            {links.map((link, index) => (
                <a key={index} className={link.className}>
                    <Image src={link.src} alt={link.alt} height={15} />
                </a>
            ))}
        </div>
    );
}
