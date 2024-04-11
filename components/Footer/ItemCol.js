import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItemCol({ str, icon }) {
    return (
        <li className="footer-item">
            <a
                href={icon ? icon.link : ""}
                target={icon ? "_blank" : ""}
                className="text-footer dark:text-main_white text-[1.2rem] no-underline py-3 px-0 inline-flex items-center gap-2 hover:text-primary"
            >
                {icon && (
                    <FontAwesomeIcon icon={icon.name} className="h-[1.8rem]" />
                )}
                {str}
            </a>
        </li>
    );
}
