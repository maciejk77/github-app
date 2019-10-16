import React, { useState, useEffect } from 'react';
import RepoItem from '../RepoItem';

const Repositories = ({ data }) => {
  const { repos_url, avatar_url, name } = data;
  const [repos, setRepos] = useState();

  console.log(repos);

  useEffect(() => {
    const fetchReposData = () => {
      fetch(`${repos_url}`)
        .then(res => res.json())
        .then(data => data && setRepos(data));
    };
    fetchReposData();
  }, []);

  return (
    <div>
      <div>Name: {name}</div>
      <img src={avatar_url} style={{ width: '100px' }} />
      {repos && repos.map(repo => <RepoItem key={repo.id} name={repo.name} />)}
    </div>
  );
};

export default Repositories;
