//Immediately Invoked Function Element

(function() {
  'use strict';

  // let $container = document.querySelector('span');
  //
  // $container.textContent = "Friday"
  //
  // let $elementId = document.querySelector('#my-id');
  // console.log($elementId.textContent);
  //
  // let $date = new Date(); creates variable $date to equal to the "new Date" which is the time of it running.
  // console.log(date); prints current time and date in console log

  let $time = document.querySelector('time');

  let setTime = () => {
    // console.log('hey');
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let mins = currentTime.getMinutes();
    let secs = currentTime.getSeconds();

    let getCurrentTime = (`${hours}:${mins}:${secs}`);

    $time.textContent = (getCurrentTime);

  }
















  setInterval(setTime, 1000);






})();
