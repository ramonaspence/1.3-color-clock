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



  let getCurrentTime = () => {
    let $currentTime = new Date();
    $time.textContent = ($currentTime);
  }

  setInterval(getCurrentTime, 1000)


  // $getCurrentTime();


  // let $button = document.querySelector('button');
  // $button.addEventListener('click', () => {
  //   console.log('you touched the but');
  // });
  //
  // let $time = document.querySelector('time');
  // $time.addEventListener('hover', () => {});








})();
