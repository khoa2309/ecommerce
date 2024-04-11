import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLinks({ links }) {
    return (
        <div className="flex items-stretch gap-[0.6rem]">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    className={link.className}
                >
                    <FontAwesomeIcon
                        icon={link.icon}
                        className={link.iconClassName}
                    />
                </a>
            ))}
        </div>
    );
}
