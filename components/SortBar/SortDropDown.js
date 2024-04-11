import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SortDropdown({ option, onClick }) {
    return (
        <div className="relative min-w-[20rem] h-[3.6rem] px-[1.2rem] rounded-[0.2rem] bg-white flex justify-between items-center group">
            <span className="text-[1.4rem]">Giá</span>
            <FontAwesomeIcon
                icon={faAngleDown}
                className="text-[1.4rem] text-heading_black h-[1.4rem]"
            />

            <ul className="absolute hidden top-full group-hover:block bg-white left-0 rounded-[0.2rem] w-full z-10">
                {option.map((item, index) => (
                    <li key={index}>
                        <a
                            className={`sortByPrice ${
                                item.active ? "text-primary" : ""
                            }`}
                            onClick={onClick}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
