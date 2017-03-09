var time = 0;
var continue_time = 0;
var timerID;
var add_sec = 0;
function startPause() {
  if(continue_time==0){
    continue_time = 1;
    upTime();
    document.getElementsByClassName('start-pause')[0].innerHTML='Pause';
  }
  else {
    continue_time = 0;
    document.getElementsByClassName('start-pause')[0].innerHTML='Pause';
  }
}
function reset() {
  time=0;
  continue_time=0;
  clearTimeout(timerID);
  document.getElementsByClassName('start-pause')[0].innerHTML='Start';
  document.getElementsByClassName('out')[0].innerHTML='00:00:00';
  document.getElementsByClassName('out-split')[0].innerHTML = '';


}
function upTime() {
  if(continue_time ==1){
    timerID = ( setTimeout(function () {
      time++;
      var mins = Math.floor(time/10/60);
      var secs = Math.floor(time/10);
      var thents = time%10;

      add_sec+=2;
      if(add_sec>99){
        add_sec=0;
      }
      document.getElementsByClassName('out')[0].innerHTML=mins+':'+secs+':'+thents+add_sec;
      upTime()
    },100));

  }
}
var start_pause = document.getElementsByClassName('start-pause')[0];
start_pause.addEventListener('click',startPause);

var clear_time = document.getElementsByClassName('clear')[0];
clear_time.addEventListener('click', reset);



var split_time = document.getElementsByClassName('split')[0];
split_time.addEventListener('click', function(){
  document.getElementsByClassName('out-split')[0].innerHTML += '<p>'+ document.getElementsByClassName('out')[0].innerHTML+'</p>';
})
