"use strict";

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error of ${src}`));

  document.head.append(script);
}

function loadScriptViaPromise(src) {
  return new Promise( (resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;
    
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}

/*
loadScript('alert.js', (err, element) => {
  if (err) {
    alert(`Error ${err}`);
  } else {
    alert(`Element: ${element}`);
  }
});
*/
loadScriptViaPromise('alert.js')
  .then((value) => alert(`Element, ${value.src}`))
  .catch((err) => alert(`Error: ${err.message}`))
  .finally( () => alert(`Ok!`));