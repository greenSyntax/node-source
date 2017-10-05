# demoNode
## Node Codepad

### Module Http
Used to create Http server.

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
* writeHead() method takes status-code and header dictionary.
* end() method takes body content of response.
