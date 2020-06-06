# 222. Dark mode. Everywhere.

222 is a bookmarklet that enables darkmode on any website.

Simply drag and drop this link [222](javascript:document.querySelectorAll('*').forEach(e=>e.setAttribute('style','background-color:#222;background-image:none;color:#'+(/^A|BU/.test(e.tagName)?'36c;text-decoration:underline;':'eee;')+e.getAttribute('style')))) to your bookmark bar to have a consistant looking dark-mode button on every site.

## Customization
Customizing is easy, simpy fork the project and change the styles you would like in [./index.js](./index.js).

## Contributing
Please open pull requests and issues on github for anything you find :).
