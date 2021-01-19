# html.css

Make standard HTML pretty by simply including a single CSS file.

Check out the [docs/demo](https://marty.zalega.me/html.css)

## Purpose

There are many great CSS frameworks and libraries but they all require using 
their class names and structure. This can be a bit much when all you want or 
have is standard HTML and just want it to look half decent.

Web browsers offer very plain, even ugly, defaults for HTML that does not 
include any styles. The aim of this project is to make it easy to invigorate
styleless HTML, including older web pages, with just a single CSS file.

## Usage

Download the latest distribution from `dist/html.css` to your project.

Add the following tag inside `<head>` in your HTML file:

```html
<link rel="stylesheet" href="html.css">
```

or you can just use through [jsDelivr's CDN](https://www.jsdelivr.com):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/evilmarty/html.css/dist/html.css">
```

## Build

[Gulp](https://gulpjs.org) is used to build the distribution.

1. Clone the repository.
2. Run `yarn install` or `npm install`
3. Run `gulp`
4. Final build is available in `dist/`

## Attribution

This project uses code from [Shoelace](https://shoelace.style) library who deserve much credit.

## TODO

* [ ] Finish docs
* [x] Finish index.html
* [ ] Test in popular browsers
