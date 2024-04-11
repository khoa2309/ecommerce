import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

function renderStars(star) {
    const fullStars = [...Array(star)].map((_, index) => (
        <FontAwesomeIcon
            key={index}
            icon={solidStar}
            className="text-yellow-400 h-[0.8rem] "
        />
    ));
    const emptyStars = [...Array(5 - star)].map((_, index) => (
        <FontAwesomeIcon
            key={index}
            icon={farStar}
            className="text-gray-400 h-[0.8rem] bg-white"
        />
    ));
    return (
        <div className="ml-auto flex gap-1">
            {fullStars}
            {emptyStars}
        </div>
    );
}

function percentSale(oldPrice, newPrice) {
    const oldPriceNumber = Number(oldPrice.replace(/\./g, "").slice(0, -1));
    const newPriceNumber = Number(newPrice.replace(/\./g, "").slice(0, -1));
    const percentSale =
        ((oldPriceNumber - newPriceNumber) / oldPriceNumber) * 100;
    return percentSale.toFixed(0);
}

function renderPrice(oldPrice, newPrice) {
    return (
        <div className="flex flex-wrap items-baseline ml-[1rem]">
            <span className="text-[1.4rem] text-heading_black line-through mr-[0.6rem]">
                {oldPrice}
            </span>
            <span className="text-[1.6rem] text-primary">{newPrice}</span>
        </div>
    );
}

export default function ProductInfo({ product }) {
    return (
        <div>
            <h4 className="card_name card_name_limit">{product.name}</h4>
            {renderPrice(product.oldPrice, product.newPrice)}
            <div className="flex justify-between items-center my-[0.8rem] mx-[1rem]">
                <span>
                    {product.liked ? (
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="text-[#f63d30] h-[1.4rem]"
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={farHeart}
                            className="text-[#f63d30] h-[1.4rem]"
                        />
                    )}
                </span>
                {renderStars(product.star)}
                <span className="text-gray ml-[0.6rem] text-[1.2rem]">
                    {product.sold}
                </span>
            </div>
            <div className="flex justify-between mx-[1rem] text-gray text-[1.2rem] font-light">
                <span>{product.brand}</span>
                <span>{product.origin}</span>
            </div>
            <div className="absolute top-4 left-[-4px] bg-primary font-medium text-white pr-[0.4rem] text-[1.1rem] rounded-tr-[0.3rem] rounded-br-[0.3rem] stick_like flex items-center">
                <FontAwesomeIcon
                    icon={faCheck}
                    className="h-[1rem] font-medium m-[0_0.3rem_0_0.4rem]"
                />
                <span>Yêu thích</span>
            </div>
            <div className="sale">
                <span className="text-[#ee4d2d] leading-6">{`${percentSale(
                    product.oldPrice,
                    product.newPrice
                )}%`}</span>
                <span className="text-white leading-6">GIẢM</span>
            </div>
        </div>
    );
}
