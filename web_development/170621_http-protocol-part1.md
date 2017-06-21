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

## Reqeust and Reponse Message Formats
- 

## 참고
- [The Protocol Every Web Developer Must Know](https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177d)
