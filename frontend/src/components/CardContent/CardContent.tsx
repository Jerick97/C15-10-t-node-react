import { useState } from "react";
//import { BsStarFill, BsStarHalf } from "react-icons/bs";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

interface PlaceObj {
  place: { imgs: string[]; name: string; description: string };
}

function CardContent({ place }: PlaceObj) {
  const [isFavorite, setIsFavorite] = useState(true);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  /* const renderStars = () => {
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
  }; */

  return (
    <div className="card card-compact w-full bg-green-600 shadow-xl mt-3 md:h-96 h-[23rem] mx-1">
      <figure className="relative overflow-hidden group">
        <img
          src={place.imgs[0]}
          alt={place.name}
          className="w-full h-44 object-cover transition-transform transform-gpu group-hover:scale-105"
        />
        <FavoriteButton isFavorite={isFavorite} onClick={toggleFavorite} />
      </figure>
      <div className="card-body h-16">
        <h2 className="card-title text-green-50 md:text-xl sm:text-lg text-base">
          {place.name}
        </h2>
      </div>

      {/* Acomodar esto porque queda fuera de la card sin acotar el string */}

      {/* <div className="card-body sm:h-16 h-14">
        <h2 className="card-title text-green-50 md:text-xl sm:text-lg text-base">
          {}
        </h2>
      </div>       */}
      <p className="text-white pb-1 md:text-base text-sm">
        <strong className="text-green-100">
          {place.description.substring(0, 50)}
        </strong>
      </p>

      <div className="p-4">
        <div className="card-actions">
          {/* <div className="flex flex-row mx-auto items-center">
            {renderStars()}
            <p className="text-base text-gray-200 mx-1">{rating}</p>
          </div> */}
        </div>
        <p className="text-white pb-1 md:text-lg text-sm">
          Desde <strong className="text-green-100">$1000</strong> por adulto
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
