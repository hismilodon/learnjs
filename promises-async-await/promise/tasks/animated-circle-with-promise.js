'use strict';

function showCircle(left, top, radius) {
  return new Promise((resolve, reject) => {
    try {
      let div = document.createElement("div");
      div.style.left = left + radius + "px";
      div.style.top = top + radius + "px";
      div.style.width = 0;
      div.style.height = 0;
      div.classList.add("circle");
      document.body.append(div);

      setTimeout(()=>{
        div.style.left = left + "px";
        div.style.top = top + "px";
        div.style.width = 2 * radius + "px";
        div.style.height = 2 * radius + "px";

        div.ontransitionend = () => {
          resolve(div);
          div.ontransitionend = null;
        };
      }, 0);
    
    } catch(err) {
      reject(err);
    }
  });
}

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});