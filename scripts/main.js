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
  let currentTime, hours, mins, secs;
  let $progress = document.querySelector('progress');

  let setTime = () => {
    currentTime = new Date();
    hours = ('0' + currentTime.getHours()).slice(-2);
    mins = ('0' + currentTime.getMinutes()).slice(-2);
    secs = ('0' + currentTime.getSeconds()).slice(-2);

    let getCurrentTime = (`${hours}:${mins}:${secs}`);
    $time.textContent = (getCurrentTime);

    let percentage  = ((secs) * 5);

    let width = ((percentage).toString());



    // let barWidth = (percentage * 100).toString();
    $progress.style.width = (`${width}px`);
  }


    // $progress.style.width = ('200px');



  setInterval(setTime, 1000);


})();
