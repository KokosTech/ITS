import { useEffect, useState } from "react";
import axios from "axios";

import ButtonNav from "./components/nav/ButtonNav";
import Loading from "./components/Loading";
import PassengersContainer from "./components/passengers/PassengersContainer";

const PAGE_LIMIT = 10;

const App = () => {
  const [pages, setPages] = useState({
    current: 0,
    size: 0,
    data: [],
  });

  useEffect(() => {
    if (pages.data[pages.current] === undefined) {
      axios
        .get(
          `https://api.instantwebtools.net/v1/passenger?page=${pages.current}&size=${PAGE_LIMIT}`
        )
        .then((response) => {
          return response;
        })
        .then((response) => {
          if (pages.size === 0) {
            setPages((prev) => {
              return {
                ...prev,
                size: response.data.totalPages,
                data: [response.data.data],
              };
            });
          } else {
            setPages((prev) => {
              return {
                ...prev,
                data: [...prev.data, response.data.data],
              };
            });
          }
          console.log("STATE", pages);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [pages.current]);

  if (!pages.data.length) return <Loading />;

  return (
    <div className="App h-screen w-screen flex flex-col items-center space-y-5 bg-black text-white">
      <PassengersContainer
        passengers={pages.data}
        current={pages.current}
        limit={PAGE_LIMIT}
      />
      <ButtonNav
        current={pages.current}
        size={pages.size}
        setPages={setPages}
      />
    </div>
  );
};

export default App;
