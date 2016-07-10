# Critical Rendering Path I

## What is it?
- The sequence of steps the browser goest through to render the page, to convert the HTML, CSS and Javascript into actual pixels on the screen.
- **Always meausre first! and Optimize it!**

## Converting HTML To The DOM
![HTMLtoDOM](/Users/user2/Documents/Programming/TIL/udacity/htmlToDOM.png "HTMLtoDOM")
- Make a request to Server with HTML -> The HTML will be converted to DOM (The browser will be processing the HTML and building the DOM)
- The specific rules
  1. Every time the browser meets a tag bracket, it automatically emits a token.
  2. e.g)
  ![MakingTokens](/Users/user2/Documents/Programming/TIL/udacity/makingAtoken.png "MakingTokens")
  3. This entire process is done by the tokenizer.
  4. While it's being processed, another process is happening which is consuming the token to create nodes.
  ![NodeRelationship](/Users/user2/Documents/Programming/TIL/udacity/nodesRelationship.png "NodeRelationship")
- DOM : a tree structure that captures the content and properties of the HTML and all the relationships between the nodes.
- How Google does optimize it? :
  - **[Incremental HTML Delivery]** Think about the Google Search Engine. The header renders first and the rest of the HTML based on your search query will be shown to the user. (Returning the partial HTML could be a really nice performance optimization)
- StackTrace in Timeline :
  ![TimeLineTrace](/Users/user2/Documents/Programming/TIL/udacity/timeline.png "TimeLineTrace")
  - (1) Send Request --> (2) Receive Response -> (3) Receive Data -> (4) Finish Loading -> (5) Parse HTML (Request CSS, Javascript and Images)

## The CSSOM
- The browser blocks page rendering til it receives and processes all of the CSS. **[CSS is render blocking](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css?hl=en)**
  - It's really important to use media queries on css stylesheets. like this one.
  ![CSSMediaQuery](/Users/user2/Documents/Programming/TIL/udacity/css_mediaQuery.png "CSSMediaQuery")
- Worth to Know : The more specific CSS rule is more expensive cuz it has to traverse more nodes in the DOM tree. [Why do browsers match CSS selectors from right to left?](http://stackoverflow.com/questions/5797014/why-do-browsers-match-css-selectors-from-right-to-left)

## Render Tree
- Combine above those two DOM tree and CSSOM into the render tree.
- Render tree only captures visible contents
- [How does it work?](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=en)

## Layout
- To know where and how all the elements are positioned on the page
- `<meta name="viewport" content="width=device-width">` setting the width as your device width. e.g) `device width=320px` is `width=320px`

## CRP workflow
1. Request HTML Resources
2. Receive Data
3. Parse HTML (Converting the received Bytes to DOM tree)
4. Request CSS / Images / Javascript
5. Contruct CSS Object Model
6. Recalculate Style (Layout : Build Render Tree (Computing all the styles for the visible contents)
7. Layout (Compute the location and the size of the render tree elements)
8. Paint (Render the page on screen)
