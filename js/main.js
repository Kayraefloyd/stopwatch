// define vars for time values
var miliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

var displayMiliseconds = 0;
var displaySeconds = 0;
var displayMinutes= 0;
var displayHours = 0;

// create var for setInterval function
var interval = null;

// create var for stopwatch status
var status = 'stopped';


//Stopwatch function
function stopWatch() {

  miliseconds+=10;

  if(miliseconds >= 1000) {
    miliseconds = 0;
    seconds++;
  }

  if (seconds >= 60) {
    seconds = 0;
    minutes++;

    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  if(miliseconds < 100) {
    displayMiliseconds = "0";
  } else {
    displayMiliseconds = miliseconds.toString();
    displayMilisecondsSliced = displayMiliseconds.slice(0, 1);
  }

  if(seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if(minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  if(hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  //display updated time values
  document.getElementById("display").innerHTML = displayHours + ':' + displayMinutes + ":" + displaySeconds + "." + displayMilisecondsSliced;


}



function startStop () {

  if (status === 'stopped') {
    interval = window.setInterval(stopWatch, 10);
    document.getElementById('startStop').innerHTML = "Stop";
    status = "started";
  } else {
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    status = 'stopped';
  }

}

//function to reset the stopwatch
function reset() {
  window.clearInterval(interval);
  miliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerHTML = "00:00:00.0";
  document.getElementById("startStop").innerHTML = "Start";
}

function lap () {

  var lapArray = [];



}


