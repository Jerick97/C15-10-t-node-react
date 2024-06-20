import { Suspense } from "react";
import { useStore } from "react-redux";
import { Store } from "../../profile.type";

export default function UserData() {
  const store: Store = useStore();
  const currentUser = store.getState().auth.user;
  return (
    <div>
      <section className=" h-full w-full">
        <div className="flex md:flex-col gap-5 flex-row mb-3 items-center justify-center mx-1">
          <div className="avatar">
            <Suspense
              fallback={<div className="skeleton w-[16rem] rounded-full"></div>}
            >
              <div className="md:w-[14rem] sm:w-40 w-32 rounded-full">
                <img
                  src={`https://source.unsplash.com/random/256x256?sig=${currentUser.firstname}`}
                  className="img-fluid"
                  alt="avatar username"
                />
              </div>
            </Suspense>
          </div>
          <h2 className="sm:text-3xl text-2xl w-full font-bold">
            {currentUser.firstname} {currentUser.lastname}
          </h2>
        </div>

        <div className="md:flex md:flex-col md:w-[16rem] mb-3 mx-1">
          <div className="flex flex-col gap-4 border-2 rounded h-full p-4 md:flex-row md:flex-wrap">
            <button className="w-full btn btn-outline sm:btn-md md:btn-sm">
              Actualizar
            </button>
            <ul className="flex flex-col gap-2">
              <li>{currentUser.address}</li>
              <li>{currentUser.email}</li>
              <li>{currentUser.phone}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
