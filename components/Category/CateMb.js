export default function CateMb({ cateItems, onClick }) {
    return (
        <nav className="lg:hidden">
            <ul className="flex list-none pl-0 max-w-full overflow-x-auto mb-category__list">
                {cateItems.map((item, index) => (
                    <li className="flex-shrink-0 mr-[1rem]" key={index}>
                        <a
                            className={`mb-category__link cursor-pointer ${
                                item.active ? "text-gray" : "text-white"
                            }`}
                            onClick={onClick}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
