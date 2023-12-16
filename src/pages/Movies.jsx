import { useState } from 'react';
import { searchMovie } from 'servises/api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  // const [totalPages, setTotalPages] = useState(1);

  const handleSubmit = async e => {
    e.preventDefault();

    if (query.trim() === '') {
      return alert('Please enter a valid search term');
    }

    try {
      const { results } = await searchMovie(query, 1);
      setResults(results);
      // setTotalPages(total_pages);
    } catch (error) {
      console.log(error);
    }

    setQuery('');
  };

  const handleChangeInput = e => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  return (
    <div style={{ width: 988 }}>
      <h2>Movie serch page...</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search movie..."
          onChange={handleChangeInput}
        />
        <button>Search</button>
      </form>

      <div>
        <ul>
          {results.map(({ id, title, release_date }) => {
            return (
              <li key={id}>
                <h3>{title}</h3>
                <p>{release_date}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
