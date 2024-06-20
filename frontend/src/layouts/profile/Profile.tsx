import AgendaList from "./components/agenda/AgendaList";
import HistoryList from "./components/history/HistoryList";
import ReviewList from "./components/review/ReviewList";
import UserData from "./components/userData/userData";

export default function Profile() {
  return (
    <div className="min-h-screen pt-20">
      <></>
      <section className="flex flex-col md:flex-row md:gap-16 sm:gap-9 md:m-8 sm:m-2 m-1">
        <UserData />
        <div className="flex flex-col overflow-y-auto h-full w-full">
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab md:text-xl sm:text-lg text-base"
              aria-label="Agenda"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box sm:p-6 p-2 gx-2"
            >
              <AgendaList />
            </div>
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab md:text-xl sm:text-lg text-base"
              aria-label="Reseña"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box sm:p-6 p-2"
            >
              <ReviewList />
            </div>
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab md:text-xl sm:text-lg text-base"
              aria-label="Historial"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box sm:p-5 p-2"
            >
              <HistoryList />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
