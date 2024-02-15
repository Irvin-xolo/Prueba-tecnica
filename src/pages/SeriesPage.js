import React, { useState, useEffect } from 'react';
import '../css/peliculasPages.css';

function SeriesPage() {
  const [series, setSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const seriesPerPage = 10;

  useEffect(() => {
    fetch('/sample.json') 
      .then(response => response.json())
      .then(data => {
        const seriesData = data.entries.filter(entry => entry.programType === "series");
        setSeries(seriesData);
      });
  }, []);

  const indexOfLastSerie = currentPage * seriesPerPage;
  const indexOfFirstSerie = indexOfLastSerie - seriesPerPage;
  const currentSeries = series.slice(indexOfFirstSerie, indexOfLastSerie);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Series</h1> {}
      <div className="movie-list"> {}
        {currentSeries.map(serie => (
          <div key={serie.title} className="movie-item"> {}
            <img src={serie.images['Poster Art'].url} alt={serie.title} />
            <div className="movie-info"> {}
              <p>{serie.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(Math.ceil(series.length / seriesPerPage)).keys()].map(number => (
          <button key={number + 1} onClick={() => paginate(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SeriesPage;
