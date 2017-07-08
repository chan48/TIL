## HTTP?
- Hypertext Transfer Protocol : stateless & application layer protocol for communicating between distributed systems.
- Stateless : Does not keep state between different message exchanges
- Default Port : 80

## HTTP Basics
- Communication between a host and a client : request / response pair
- The current version of the protocol : HTTP/1.1
- URL : Uniform Resource Locators (URLs)

![url-structure](https://cdn.tutsplus.com/net/authors/jeremymcpeak/http1-url-structure.png)

  - resource path : the local path to the resource on the server

## Verbs
- **GET** : fetch an existing resource
- **POST** : create a new resource
- **PUT** : update an existing resource
- **DELETE** : delete an existing resource
- **HEAD** : similar to GET but without the message body to see if the resource has changed via timestamps

## Status Codes
- When client initiates requests to server. In return, the server responds with status codes and message payloads
- Status code is **to tell the clients how to interpret the server response**
- 1xx : Informational Message like telling the clients to to continue sending the remainder of the request
- 2xx : Successful. The request of the client was successfully processed.
- 3xx : Redirection. Requires clients of taking additional actions like jumping to a different URL to fetch the resource
  - 304 : Not Modified. The server determined the resource hasnt changed, which implies the client is sending Etag
- 4xx : Client Error. The server assumes that the client either makes a bad request or requesting an invalid resource
- 5xx : Server Error. Indicate that server has failed at processing requests.

> 404 indicates that the resource is invalid and does not exist on the server.

## Request and Reponse Message Formats
-

## HTTP Connections
- A connection for Server and Client must be established to communicate each other
- A TCP stream is broken into IP packets (TCP port : 80)
- HTTP is an application layer protocol over TCP & IP
- HTTPS is a secure version of HTTP, inserting additional layer between HTTP and TCP & IP

![https](https://cdn.tutsplus.com/net/authors/jeremymcpeak/http2-http-https.png)

- Transport Layer Security (TLS), Secure Sockets Layer (SSL)
- The Key Difference between HTTP 1.0 / HTTP 1.1 is 1.0 opens a connection for each web resource which would cause lot of network delays whereas 1.1 keeps the connection persistent.
- **Parallel Connections** : A pool of connections that accepts 6 connections at once to download assets from clients.



## 참고
- [The Protocol Every Web Developer Must Know](https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177d)
