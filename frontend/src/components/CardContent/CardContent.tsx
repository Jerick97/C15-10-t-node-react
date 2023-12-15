import { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

interface CardContentProps {
  name: string;
  location: string;
  image: string;
  rating: number;
  price: number;
}

function CardContent({
  name,
  location,
  image,
  rating,
  price,
}: Readonly<CardContentProps>) {
  const [isFavorite, setIsFavorite] = useState(true);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const renderStars = () => {
    const stars = [];
    const integerPart = Math.floor(rating);
    const hasDecimal = rating % 1 !== 0;

    for (let i = 0; i < integerPart; i++) {
      stars.push(<BsStarFill key={i} className="text-yellow-500" />);
    }

    if (hasDecimal) {
      stars.push(<BsStarHalf key="half" className="text-yellow-500" />);
    }

    return stars;
  };

  return (
    <div className="card card-compact w-full bg-green-600 shadow-xl mt-3 md:h-96 h-80 mx-1">
      <figure className="relative overflow-hidden group">
        <img
          src={image}
          alt={location}
          className="w-full transition-transform transform-gpu group-hover:scale-105"
        />
        <FavoriteButton isFavorite={isFavorite} onClick={toggleFavorite} />
      </figure>
      <div className="card-body sm:h-16 h-14">
        <h2 className="card-title text-green-50 md:text-xl sm:text-lg text-base">
          {name} , {location}
        </h2>
      </div>
      <div className="p-4">
        <div className="card-actions">
          <div className="flex flex-row mx-auto items-center">
            {renderStars()}
            <p className="text-base text-gray-200 mx-1">{rating}</p>
          </div>
        </div>
        <p className="text-white pb-1 md:text-lg sm:text-sm">
          Desde <strong className="text-green-100">${price}</strong> por adulto
        </p>
        <div className="card-actions">
          <button className="btn btn-block bg-green-400 text-green-950 hover:bg-green-300 hover:text-green-950 border-0 rounded-xl">
            Comprar Ahora
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardContent;