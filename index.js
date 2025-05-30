const release = new Date(Date.UTC(2025, 6, 28, 15, 0, 0, 0))
const SECOND_IN_MILLISECONDS = 1000;
const MINUTE_IN_MILLISECONDS = SECOND_IN_MILLISECONDS * 60;
const HOUR_IN_MILLISECONDS = MINUTE_IN_MILLISECONDS * 60;
const DAY_IN_MILLISECONDS = HOUR_IN_MILLISECONDS * 24;

function onLoad(){
    load();
    update();
    window.setInterval(update, 1000);
}

async function load(){
    var config = await apiString("api/maps/v1/count");
    console.log(config);
    document.getElementById("mapCount").innerHTML = config;
}

function update(){
    var now = new Date();
    var timeLeft = release - now;
    var element = document.getElementById("countdown");

    if (element == null || element == undefined)
        return;

    if (timeLeft < 0){
        element.innerHTML = "Download now!";
        return;
    }

    const daysLeft = Math.floor(timeLeft / DAY_IN_MILLISECONDS);
  
    const hoursLeft = Math.floor(
      (timeLeft % DAY_IN_MILLISECONDS) / HOUR_IN_MILLISECONDS
    ).toLocaleString('en-US', { minimumIntegerDigits: 2 });
    
    const minutesLeft = Math.floor(
      (timeLeft % HOUR_IN_MILLISECONDS) / MINUTE_IN_MILLISECONDS
    ).toLocaleString('en-US', { minimumIntegerDigits: 2 });
    
    const secondsLeft = Math.floor(
      (timeLeft % MINUTE_IN_MILLISECONDS) / SECOND_IN_MILLISECONDS
    ).toLocaleString('en-US', { minimumIntegerDigits: 2 });
  
    // display formatted time in DOM
    element.innerHTML = `${daysLeft}d:${hoursLeft}h:${minutesLeft}m:${secondsLeft}s`;
}

function sanitiseNumber(num){
    var result = num.toString();
    if (result.length < 2)
        result = "0" + result;

    return result;
}