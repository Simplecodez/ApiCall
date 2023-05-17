const https = require('https');

module.exports = () => {
  return new Promise((resolve, reject) => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    let container = '';
    https.get(url, (res) => {
      res.on('data', (chunk) => {
        if (chunk) {
          container += chunk;
        }
      });
      res.on('end', () => {
        const result = JSON.parse(container);
        if (Object.keys(result).length !== 0) {
          resolve(result);
        } else {
          reject("Sorry, couldn't retrieve data!");
        }
      });
    });
  });
};
