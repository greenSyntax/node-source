var url = require('url');

var urlAddress = "http://google.com/index.html?page=1&post=12";

var path = url.parse(urlAddress, true);

console.log(path.hostname);   //googel.com
console.log(path.pathname);   // /index.html
console.log(path.search);     //?page=1&post=12
console.log(path.query.page); //1
console.log(path.query.post); //12
