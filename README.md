# 222. Dark mode. Everywhere.

222 is a bookmarklet that enables darkmode on any website.

Simply drag and drop these 222 bytes to your bookmarks bar
```javascript
javascript:document.querySelectorAll('*').forEach(e=>e.setAttribute('style','background-color:#222;background-image:none;color:#'+(/^A|BU/.test(e.tagName)?'36c;text-decoration:underline;':'eee;')+e.getAttribute('style')))
```
And then click the bookmark on any page you want to enable darkmode on.

## Examples
![](./examples/hn.png)
![](./examples/youtube.png)
![](./examples/google.png)

## Alternative Installation
Simply create a bookmark and set the content of [./index.js](./index.js) as the url and click it on any page you want to enable dark mode.

## Customization
Customizing is easy, simpy fork the project and change the styles you would like in [./index.js](./index.js).

## Chrome Extension:

To install as a chrome extension:

1. Check-out or download this project

2. Open Chrome Browser, click tools->extensions

3. Enable developer mode, click toggle ( top-right )

4. Click "load unpacked" button and choose the 222 installation folder

you're good to go!

## Contributing
Please open pull requests and issues on github for anything you find :).
