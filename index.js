javascript:(() => {
  document.querySelectorAll('*').forEach(el => {
    let styles = 'background-color: #222; background-image: none;';
    if (el.tagName === 'A' || el.tagName === 'BUTTON') {
      styles += 'color: #3366cc; text-decoration: underline;';
    } else {
      styles += 'color: #fcfcfc;';
    }
    if (el.getAttribute('style')) {
      el.setAttribute('style', styles + el.getAttribute('style'));
    } else {
      el.setAttribute('style', styles);
    }
  });
})()
