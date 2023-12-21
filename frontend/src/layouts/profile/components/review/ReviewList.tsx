import axios from "axios";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReviews } from "../../reducer/reviewsSlice";
import { RootState } from "../../../../store/store";
import ReviewItem from "./ReviewItem";


export default function ReviewList() {


  const dispatch = useDispatch();
  const reviews = useSelector((state: RootState) => state.reviews.reviews);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const getReviews = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/reviews/user-reviews/${user?.id}`
      );
      dispatch(setReviews(response.data));
    };
    getReviews();
  }, []);

  if (!reviews) {
    return (
      <article className="flex flex-col gap-4">
        <div>
          <h1>Parece que no hay reseñas para mostrar.</h1>
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col gap-4">
      <Suspense fallback={<div className="skeleton card"></div>}>
        {/* {loading && <div className="skeleton card"></div>} */}
        {reviews &&
          reviews.map((review) => (
            <div key={review._id}>
              <ReviewItem review={review}></ReviewItem>
            </div>
          ))}
      </Suspense>
    </article>
  );
}
