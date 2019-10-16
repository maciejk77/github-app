import React from 'react';
import './styles.scss';

const RepoItem = ({ name }) => {
  return <div className="repo-item">{name}</div>;
};

export default RepoItem;
