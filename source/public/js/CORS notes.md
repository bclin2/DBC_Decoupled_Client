CORS notes
Cross-site HTTP requests are HTTP requests for resources from a DIFFRENT domain than
the domain of the resource making the request.

They are subject to well-known restrictions for security reasons.

Cross-Origin Resource Sharing (CORS) provides a way for web servers to support
cross-site access controls; enabling secure cross-site data transfers.

=========================================================================
Simple Requests
-Only uses GET, HEAD, or POST
  -If POST is used; content-type that is sent to the server is:
    -application/x-www-form-urlencoded, multipart/form-data, or text/plain

SERVER must provide access-control-allow-origin headers. For rails, it should
look like this:

headers['Access-Control-Allow-Origin'] = '*'
headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
headers['Access-Control-Request-Method'] = '*'
headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'

Pre-flight Requests
