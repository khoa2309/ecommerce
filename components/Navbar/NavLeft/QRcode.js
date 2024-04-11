import Image from "next/image";

export default function QRCode({ src, alt }) {
    return (
        <Image src={src} alt={alt} className="border-none w-full" priority />
    );
}
