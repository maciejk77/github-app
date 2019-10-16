import React, { useState, useEffect } from 'react';
import Repositories from '../Repositories';
import './styles.scss';

const baseUrl = 'http://localhost:8080/users';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [finalKeyword, setFinalKeyword] = useState('');
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchUserData = user => {
      if (user) {
        fetch(`${baseUrl}/${user}`)
          .then(res => res.json())
          .then(data => data && setUserData(data));
      }
    };
    fetchUserData(keyword);
    return () => setKeyword('');
  }, [finalKeyword]);

  const handleSubmit = e => {
    e.preventDefault();
    setFinalKeyword(keyword);
  };

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          className="search-bar__input"
          value={keyword}
          onChange={handleChange}
        />
        <button className="search-bar__button">FIND</button>
      </form>
      {userData ? <Repositories data={userData} /> : null}
    </div>
  );
};

export default SearchBar;
