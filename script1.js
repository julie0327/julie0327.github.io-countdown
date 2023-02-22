const days = document.querySelector('#days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

let currentYear = new Date().getFullYear();
let newYearTime = new Date(`Jan 01 ${currentYear + 1} 00:00:00`)

year.innerText = currentYear + 1;

setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex'
}, 1000)


setInterval(() => {
    let currentTime = new Date()
    let diff = newYearTime - currentTime
    let h = Math.floor(diff / 1000 / 60 / 60) % 24
    let m = Math.floor(diff / 1000 / 60) % 60;
    let s = Math.floor(diff / 1000) % 60;
    days.innerHTML = Math.floor(diff / 1000 / 60 / 60 / 24);
    hours.innerHTML = h < 10 ? '0' + h : h
    minutes.innerHTML = m < 10 ? '0' + m : m
    seconds.innerHTML = s < 10 ? '0' + s : s
}, 1000)
