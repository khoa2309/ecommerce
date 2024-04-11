import Image from "next/image";

export default function Logo({ logoInfo }) {
    const { logo, alt, className } = logoInfo;
    return <Image src={logo} alt={alt} priority className={className} />;
}
