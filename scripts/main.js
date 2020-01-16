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
  //
  //setInterval(function, ms);
   // let currentTime;
   //
   // let getCurrentTime = () => {
   //   currentTime = new Date();
   //   console.log(currentTime);
   // }



  // let $button = document.querySelector('button');
  // $button.addEventListener('click', () => {
  //   console.log('you touched the but');
  // });
  //
  // let $time = document.querySelector('time');
  // $time.addEventListener('hover', () => {});
      // let currentTime //this declares a variable and allows you to give it value on line36
      //
      // let getCurrentTime = () => {   //this declares a variable for a function?
      //   currentTime = new Date();    //then gives currentTime a value
      //   console.log(currentTime)    //then gives it a...method or object and function?
      // }

      // console.log(getCurrentTime);

      // setInterval(getCurrentTime, 1000); //sets a time interval to repeat the above function on lines 33-38
      let currentTime = new Date();

      let theTime = document.querySelector('time');

      theTime.innerHTML = currentTime;







})();
