const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/users/:user', async (req, res, next) => {
  const fetchUserData = () => {
    //const myName = 'giffgaff';
    return fetch(`https://api.github.com/users/${req.params.user}`);
  };

  const processData = async () => {
    const githubResponse = await fetchUserData();
    return await githubResponse.json();
  };

  processData().then(data => res.send(data));
  res.end;
});

app.listen(8080, () => {
  console.log('App listening on port 8080!');
});
