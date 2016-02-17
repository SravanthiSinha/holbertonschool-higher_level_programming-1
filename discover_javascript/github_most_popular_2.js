var https = require('https')

var options = {
  hostname: 'api.github.com',
  path: '/search/repositories?q=language:javascript&sort=stars&order=desc',
  headers: {
    'User-Agent': 'Holberton_School',
    'Authorization': 'token a7bbd464fcaa54d8c0641a92c29a7e6feeec1645'
  }
};

const chunks = []
var req = https.request(options, function(res){
  console.log(res.statusCode);
  res.on('data', (chunk) => {
    chunks.push(chunk);
  });
  res.on('end', () => {
    var jsonString = chunks.join('');
    console.log(typeof jsonString);
    console.log(jsonString);
  });
});

req.end();
req.on('error', function(e) {
  console.error(e);
});
