var url = require('url');

var urlAddress = "http://google.com/index.html?page=1&post=12";

var path = url.parse(urlAddress, true);
console.log(path.hostname);
console.log(path.pathname);
console.log(path.search);
console.log(path.query.page);
console.log(path.query.post);
