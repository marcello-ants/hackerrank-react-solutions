import React, { useState, useEffect } from "react";

const ENDPOINT = "https://jsonmock.hackerrank.com/api/articles";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchData = async (page) => {
    const url = `${ENDPOINT}?page=${page}`;
    const response = await fetch(url);
    const { total_pages, data } = await response.json();
    setPages(total_pages);
    setArticles(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <React.Fragment>
      <div className="pagination">
        {pages &&
          Array(pages)
            .fill()
            .map((_, i) => (
              <button
                key={i}
                data-testid="page-button"
                disabled={loading}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
      </div>
      <ul className="results">
        {articles
          .filter(({ title }) => title)
          .map(({ title }) => (
            <li key={title} data-testid="result-row">
              {title}
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default Articles;
