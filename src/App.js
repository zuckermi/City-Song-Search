import React, { useState, useEffect } from 'react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = '07b953ac32c1e1c6b2407464986e0f65'; // Replace with your Last.fm API key

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query) {
      try {
        const response = await fetchLastFmTracks(apiKey, query);
        setSearchResults(response.results.trackmatches.track);
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    } else {
      setSearchResults([]);
    }
  };

  // Fetch Last.fm tracks
  const fetchLastFmTracks = async (apiKey, query) => {
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=${apiKey}&format=json`);
    return await response.json();
  };

  return (
    <div>
      <h1>City Song Search</h1>
      <form id="trackSearch" onSubmit={(e) => { e.preventDefault(); handleSearch(e.target.trackInput.value); }}>
        <label htmlFor="trackInput">Enter a City: </label>
        <input
          type="text"
          id="trackInput"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map(({ name, artist, url }) => (
          <li key={url}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name} by {artist}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
