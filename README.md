
## NodeJS Notes

### Module Http
Used to create Http server (http_server.js)

```javascript

var http = require('http');

var server = http.createServer(function(request, response){

  response.writeHead(200, {'Content-Type':'text/html'});
  response.end("Hello NodJS :)");

});

server.listen(3000);

```

#### Points
* called ***createServer()*** method which takes closure function for callback along with request and response parameter.
* ***writeHead()*** method takes status-code and header dictionary.
* ***end()*** method takes body content of response.

### Module URL
Used to parse the request url

```javascript

var url = require('url');

var urlAddress = "http://google.com/index.html?page=1&post=12";

var path = url.parse(urlAddress, true);

console.log(path.hostname);
console.log(path.pathname);
console.log(path.search);
console.log(path.query.page);
console.log(path.query.post);

```

#### Points
* ***path.pathname*** return the valid page name
* You can use ***path.query*** . It'll help you to identify the query string.
