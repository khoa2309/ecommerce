import Image from "next/image";

export default function UserProfile({ userProfile }) {
    const { name, imageURL } = userProfile;
    return (
        <li className="nav-item gap-[0.4rem] fade_text">
            <Image
                src={imageURL}
                alt={name}
                width={20}
                height={20}
                quality={100}
                className="rounded-full"
            />
            <span className="ml-1 text-2xl font-normal">{name}</span>
        </li>
    );
}
