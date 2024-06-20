import { Link } from "react-router-dom";

interface History {
  q: string;
  time: string;
}

type LocalHistory = History[];

export default function HistoryList() {
  // get item history from localstorage

  const history: LocalHistory = JSON.parse(
    localStorage.getItem("history") ?? "[]"
  );

  return (
    <>
      <div className="overflow-y-auto">
        <table className="table">
          <thead>
            <tr className="md:text-lg text-base text-base-content">
              <th colSpan={2} className="text-end">
                Lugar
              </th>
              <th>Buscado el</th>
              <th>Acción</th>
            </tr>
          </thead>
          {history && history.length > 0 ? (
            history.map((item, index) => {
              return (
                <tbody
                  key={index}
                  className="transition duration-300 ease-in-out hover:bg-base-300"
                >
                  <tr className="h-[10ch] md:text-base text-sm">
                    <th className="w-[2ch]"> {index + 1} </th>
                    <td className="w-[10ch]">
                      <h1 className="text-base">{item.q}</h1>
                    </td>
                    <td>{new Date(item.time).toLocaleString()}</td>
                    <td>
                      <Link className="btn-link" to={`/search?=${item.q}`}>
                        Buscar de nuevo
                      </Link>
                    </td>
                  </tr>
                </tbody>
              );
            })
          ) : (
            <tbody>
              <tr>
                <th
                  colSpan={4}
                  className="text-base-content text-center text-base sm:text-sm"
                >
                  ¡Aún no has explorado lugares! ¿Por qué no pruebas a buscar
                  algunos sitios interesantes?
                </th>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}
