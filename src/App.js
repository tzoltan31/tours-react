import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { Error } from "./Error";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleDelete = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };

  const getTours = async () => {
    const response = await fetch(url);
    if (response.status >= 400 && response.status < 600) {
      setIsError(true);
    } else {
      const json = await response.json();
      setTours(json);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }
  if (tours.length === 0 ? true : false) {
    return (
      <div>
        <h2 className="title">No more tours</h2>
        <div className="blue-line"></div>
        <button className="reload-tours-btn" onClick={getTours}>
          Reload tours
        </button>
      </div>
    );
  }

  return (
    <main>
      <h2 className="title">Our Tours</h2>
      <div className="blue-line"></div>
      {tours.map((tour) => {
        const { id, name, info, image, price } = tour;
        return (
          <Tours
            id={id}
            key={id}
            name={name}
            info={info}
            image={image}
            price={price}
            handleDelete={handleDelete}
          />
        );
      })}
    </main>
  );
}

export default App;
