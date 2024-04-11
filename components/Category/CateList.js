export default function CateList({ cateItems, onClick }) {
    return (
        <ul className="p-0 list-none font-[500]">
            {cateItems.map((item, index) => (
                <li key={index}>
                    <a
                        className={`relative no-underline block text-[1.5rem] py-[1rem] px-[2rem] cursor-pointer
                           ${
                               item.active
                                   ? "text-primary dark:text-primary"
                                   : "text-black dark:text-main_white"
                           }
                           ${index > 0 ? "cate" : ""}`}
                        onClick={onClick}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}
