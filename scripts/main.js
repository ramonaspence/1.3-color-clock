//!!!!use typeof to check if something is a string or number or something else!!!!

(function() {
  'use strict';


  let $time = document.querySelector('time');
  let currentTime, hours, mins, secs;
  let $progress = document.querySelector('progress');

  let setTime = () => {
    currentTime = new Date();
    hours = ('0' + currentTime.getHours()).slice(-2);
    mins = ('0' + currentTime.getMinutes()).slice(-2);
    secs = ('0' + currentTime.getSeconds()).slice(-2);

    let getCurrentTime = (`${hours}:${mins}:${secs}`);
    $time.textContent = (getCurrentTime);

    let hex = (`${hours}` + `${mins}` + `${secs}`);
    let hexCode = Number(hex).toString(16).slice(-3);
    let $body = document.querySelector('body');
    $body.style.backgroundColor = ("#" + hexCode);


    $time.addEventListener('mouseover', function (event) {
      event.target.textContent = ('#' + Number(hex).toString(16));
    });

    let percentage = ((secs) * 5);

    let width = ((percentage).toString());

    $progress.style.width = (`${width}px`);


  }

  setInterval(setTime, 1000);


})();
