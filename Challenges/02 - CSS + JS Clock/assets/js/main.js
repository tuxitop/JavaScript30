const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setHour() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();
  const secondDeg = (second / 60) * 360;
  const minuteDeg = (minute / 60) * 360;
  const hourDeg = (hour / 12) * 360 + (minuteDeg / 12);
  if (second === 59) {
    document.querySelectorAll('.hand').forEach((hand) => {
      hand.style.transition = 'none';
    });
  }
  if (second === 1) {
    document.querySelectorAll('.hand').forEach((hand) => {
      hand.style.transition = 'all 0.2s cubic-bezier(.17,3.53,.5,1.58)';
    });
  }
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setHour, 1000);