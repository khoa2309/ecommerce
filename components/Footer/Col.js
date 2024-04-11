import ItemCol from "./ItemCol";
import qr_code from "@/public/img/qr_code.jpg";
import Image from "next/image";

export default function Col({ data }) {
    const { heading, items, icons, appLinks } = data;
    return (
        <div className="col-span-1">
            <h3 className="text-[1.6rem] uppercase text-gray dark:text-main_white font-bold mb-2">
                {heading}
            </h3>

            {appLinks ? (
                <div className="flex change_mode md:justify-normal justify-center">
                    <Image
                        src={qr_code}
                        alt="qr"
                        className="h-[7rem] w-[7rem] border-[1px] border-solid border-main_white"
                        priority
                    />
                    <div className="flex flex-col justify-center ml-[1.6rem] gap-1">
                        {appLinks.map((item, index) => (
                            <a href="" key={index} className="bg-transparent">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    className={item.className}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            ) : (
                <ul>
                    {items?.map((item, index) => (
                        <ItemCol
                            key={index}
                            str={item}
                            icon={icons ? icons[index] : null} // Pass the icon prop
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}
