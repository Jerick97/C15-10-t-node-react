import { Suspense } from "react";
import { agenda } from "./agenda";
// import { PencilIcon, TrashIcon } from "lucide-react";
const formatCurrentDate = () => {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

export default function AgendaList() {
  const formattedDate = formatCurrentDate();

  return (
    <article className="flex flex-col gap-4 w-full">
      <Suspense fallback={<div>Loading...</div>}>
        {agenda.map((item) => (
          <div
            key={item._id}
            className="card card-side bg-base-100 shadow-xl mb-4 border"
          >
            <figure>
              <Suspense
                fallback={<div className="skeleton w-64 aspect-square"></div>}
              >
                <img
                  className="aspect-square h-full"
                  src={item.image}
                  alt={item.name}
                />
              </Suspense>
            </figure>
            <div className="card-body p-4 md::w-96 md:w-60 w-[12rem]">
              <h2 className="card-title text-base sm:text-lg font-bold">
                Place: {item.name}
              </h2>
              <span>
                <strong>Location: </strong>
                {item.location}
              </span>
              <p className="truncate text-sm sm:text-base">
                {item.description}
              </p>
              <div className="card-actions justify-start">
                <div>
                  <span>
                    <strong>Date: </strong>
                    {formattedDate}
                  </span>
                </div>
                {/* Hasta no tener funcionalidad no utilizar */}
                {/* <div className="flex gap-2">
                    <button className="rounded-full btn btn-primary">
                      <PencilIcon />
                    </button>
                    <button className="rounded-full btn btn-error">
                      <TrashIcon />
                    </button>
                  </div> */}
              </div>
            </div>
          </div>
        ))}
      </Suspense>
    </article>
  );
}
