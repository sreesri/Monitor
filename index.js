// Dependencies
var http = require('http')
var url = require('url')


var server = http.createServer(function (req, res) {

    // Get the url and parse it
    var parsed_url = url.parse(req.url,true)

    // get the path from url
    var path = parsed_url.pathname
    var trimmed_path = path.replace(/^\/+|\/+$/g,'')

    // send response
    res.end("hello world")

    // log the request
    console.log("path:",trimmed_path)
})

// Start the server in port 3000
server.listen(3000, function () {
    console.log("server running")
})