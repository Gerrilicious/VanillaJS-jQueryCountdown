function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


// When we click on the box let's use our friend
document.getElementById('the-box').addEventListener('click', function () {
    console.log("You clicked without jQuery");
    var threeMinutes = 60 * 3;
    var display = document.querySelector('#time');
    startTimer(threeMinutes, display);
});

document.getElementById("the-box2").onclick = function() {
    console.log("You clicked with jQuery");
    var threeMinutes = 60 * 3;
    var display = document.querySelector('#time2');
    startTimer(threeMinutes, display);
};