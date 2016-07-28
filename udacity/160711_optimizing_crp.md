# Optimizing CRP

## Optimizing DOM
- Steps
  1. Minify
  2. Compress
  3. Cache

## Optimizing Javascript
- Javscript is Parser Blocking : javascript blocks DOM parser to render the page. When it encounters script tag, it pauses DOM contruction.
- Javascript script tag blocks the parser from proceeding.
``` javascript
<p>
  Josh
  <script src="write.js"></script>
  s awesome
</p>
```
- The external javascript always blocks the DOM parser.
- But, inline & external javascript have trade offs
  - inline : duplicated the contents, blocks CSSOM
  - external : blocks DOM construction
- **CSS blocks rendering and Javascript execution**
``` javascript
<style src="style.css">
<p>
  Josh
  <script>
    var e = document.getElementsByTagName("p")[0];
    e.style.color = "red";
  </script>
  s awesome
</p>
```
![cssblocking](/Users/user2/Documents/Programming/TIL/udacity/cssblocking.png "cssblocking")

## Async Javascript
- how to load javascript after loading a page? In other words, how could javascript not block constructing DOM & CSSOM?
  1. `onload()` : The browser fires an onload() when the page is finished loading
  2. `<script async>` : Doesn't block the DOM construction and block CSSOM.
- inline script doesn't work with `async`

## General Strategies
- Minify, Compress, Cache **(Minimize Bytes)**
- Minimize use of render blocking resources (CSS) **(Reduce Crtical Resources)**
  1. use media queries on `<link>` to unblock rendering
  2. inline CSS
- Minimize use of parser blocking resources (JS) **(Shorten Critical Rendering Path)**
  1. defer javascript exception
  2. use async attribute on `<script>`

## CRP Metrics
- let's guess what the three blanks below would be
![crp_metrics](/Users/user2/Documents/Programming/TIL/udacity/crp_metrics.png "crp_metrics")

- another example
![crp_diagram](/Users/user2/Documents/Programming/TIL/udacity/crp_diagram.png "crp_diagram")

## Preload Scanner
