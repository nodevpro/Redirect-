let timer = document.getElementById("timer1");
let time = 5;

let wait = document.getElementById("timer2");
let tim = 5;

let conti = document.getElementById("continue");

let waiting = document.getElementById("wait2");

let main = document.getElementById("many");

let link = document.getElementById("link");

timer.innerHTML = time;
let reduce = setInterval(function () {
    time --;
    timer.innerHTML = time;
    if (time == 0) {
        clearInterval(reduce);
        conti.style.display = "block";
    }
}, 1000)

function con() {
    main.style.display = "block";
}

function create() {
    waiting.style.display = "block";
    wait.innerHTML = tim;
let minus = setInterval(function () {
    tim --;
    wait.innerHTML = tim;
    if (tim == 0) {
        clearInterval(minus);
        link.style.display = "block";
    }
}, 1000)
}