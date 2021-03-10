# Front-end-foundations
> A project for people who know something and want to start working with frameworks.

We'll assume you know the basics of the basics, have been building websites for some time, and would like to move on to frameworks like **React, Vue, Angular, etc.** Here's [my list](#table-of-contents) of things with simple examples that will organize your knowledge and prepare you to start working with frameworks.

In a word of introduction, I'd like to highlight two larger examples of the pages I included in the project:

- [Asynchronus JavaScript Project - Weather API](https://github.com/KoTubA/Front-end-foundations/tree/master/JavaScript/Asynchronous%20JavaScript/Asynchronus%20JavaScript%20Project%20v2)
- [Frontend Mentor - Manage landing page](https://github.com/KoTubA/Front-end-foundations/tree/master/Webpack)

## Table of Contents

- [**HTML**](#html)
  - Semantics, Accessibility, Multimedia, Canvas etc.
- [**CSS**](#css)
  - Efficient CSS
  - Advanced animations
  - Flexbox
  - Grid
  - CSS preprocessor
- [**JavaScript**](#javascript)
  - Asynchronous JavaScript
  - ES6+ (Arrow function, Classes and inheritance, Range of variables etc.)
  - ES Modules
 - [**Package managers - NPM/Yarn**](#package-managers---npmyarn)
 - [**Module bundlers - Webpack***](#module-bundlers---webpack)
 - [**Transpilers - Babel/TypeScript***](#transpilers---babeltypescript)

\* - it is enough to know its basic assumptions

## HTML

As we know, [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) is a descriptive language in which we use tags to define what a given subpage contains. HTML is the most basic building block of the Web. It defines the meaning and structure of web content. Remember, however, that it is worth repeating the issues related to **semantics** and **accessibility** before starting work with frameworks.

### Links:
- [W3C Accessibility Standards Overview](https://www.w3.org/WAI/standards-guidelines/)
- [Accessibility - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
- [ARIA HTML Tutorial - What is ARIA & Why it's Important to Use!](https://www.youtube.com/watch?v=0hqhAIjE_8I)

## CSS

[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) is neglected and underestimated by many people, due to the belief that CSS is only responsible for appearance. Remember, however, that it depends on us how the final product will look like and how it will behave on different devices - whether the interactions will be pleasant for the user, whether the animations that he watches will be smooth.

Of course, in case we are already entering the stage of application development where we want to learn frameworks, then we will not do without the use of **preprocessors**, because CSS alone very quickly becomes too limited when writing large applications.

### Links:
- [CSS Animation Optimization and Performance 101](https://www.youtube.com/watch?v=0Xg6r_MKGJ4)
- [A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Learn Flexbox In 20 Minutes | Learn HTML & CSS | Flexbox Tutorial](https://www.youtube.com/watch?v=FTlczfR82mQ)
- [A Complete Guide to Grid | CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS Grid Layout Crash Course](https://www.youtube.com/watch?v=jV8B24rSN5o)
- [Learn CSS Grid in 20 Minutes](https://www.youtube.com/watch?v=9zBsdzdE4sM)
- [Learn Sass In 20 Minutes | Sass Crash Course](https://www.youtube.com/watch?v=Zz6eOVaaelI)
- [Sass Tutorial for Beginners - CSS With Superpowers](https://www.youtube.com/watch?v=_a5j7KoflTs)
- [Sass Crash Course](https://www.youtube.com/watch?v=nu5mdN2JIwM)

## JavaScript

Once you know the basics of [JavaScript](https://developer.mozilla.org/pl/docs/Web/JavaScript) it's a good idea to familiarize yourself with the key elements of JavaScript, which will allow you to better understand how the frameworks work. It will be necessary to know the assumptions brought by new versions of **ECMAScript, asynchronicity in JavaScript and ES Modules.**

### Links:
- [Asynchronous JavaScript (2020 version)](https://www.youtube.com/watch?v=ZcQyJ-gxke0&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu)
- [Async Javascript Tutorial For Beginners (Callbacks, Promises, Async Await)](https://www.youtube.com/watch?v=_8gHHBlbziw)
- [ES6 Javascript Tutorial For Beginners | ES6 Crash Course](https://www.youtube.com/watch?v=WZQc7RUAg18)
- [JavaScript ES6 Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s)

## Package managers - NPM/Yarn
**Package managers** are an indispensable tool enabling the creation of extensive projects. Package managers allow you to:
- easy to install modules / packages locally and update them,
- easy sharing and reuse of the code with any npm user anywhere,
- creating scripts to automate repetitive tasks.

Unfortunately, tools of this type have one basic problem - they work **locally**, so the browser cannot access these resources. The solution to this problem are the **module bundles** which I will mention below.

### Links:
- [NPM Crash Course](https://www.youtube.com/watch?v=jHDhaSSKmB0)

## Module bundlers - Webpack
**Module bundlers** are tools that take **JavaScript** code snippets and their dependencies and combine them into a single file that can be run in the browser. In addition, they allow you to:
- **code spliting** - splitting the resulting files into smaller pieces,
- compiling SCSS,
- optimize graphics, html code, css,
- **tree shaking** - shaking off the code from fragments that we don't use,
- **lazy loading** - technique in which the browser does not download all resources from the server at once, but does it when it is needed.

### Links:
- [Learn Webpack - Full Tutorial for Beginners](https://www.youtube.com/watch?v=MpGLUVbqoYQ)

## Transpilers - Babel/TypeScript

**Transpilers** (in relation to the Front-end) are tools whose main purpose is to convert modern **JavaScript** code into code compatible with older browsers. Transpilers work great with module bundlers and that is why configuration of these two tools is so important. Good mastery of these skills guarantees that our projects will run correctly on any browser.

## Inspiration

The inspiration for my own list came from a [video](https://www.youtube.com/watch?v=NEb1mt3s_go) created by [helloroman.](https://github.com/helloroman)
