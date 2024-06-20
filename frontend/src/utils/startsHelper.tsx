import { BsStarFill, BsStarHalf } from "react-icons/bs";

const renderStars = (rating: number) => {
  const stars = [];
  const integerPart = Math.floor(rating);

  for (let i = 0; i < 5; i++) {
    if (i < integerPart) {
      // Mostrar BsStarFill para las partes enteras
      stars.push(<BsStarFill key={i} className="text-yellow-500" />);
    } else if (i === integerPart && rating % 1 !== 0) {
      // Mostrar BsStarHalf si hay parte decimal y estamos en la posición adecuada
      stars.push(<BsStarHalf key="half" className="text-yellow-500" />);
    } else {
      // Mostrar BsStarHalf vacía para el resto de las estrellas
      stars.push(<BsStarHalf key={i} className="text-yellow-500" />);
    }
  }

  return stars;
};

export default renderStars;
