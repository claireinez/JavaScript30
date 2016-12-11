const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const secondsDegrees = getDegrees(now.getSeconds());
  const minutesDegrees = getDegrees(now.getMinutes());
  const hoursDegrees = getDegrees(now.getHours(), 'hours');

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function getDegrees(time, unit) {
  const unitDegree = unit === 'hours'
    ? 12
    : 60;
  return ((time / unitDegree) * 360) + 90;
}

setInterval(setDate, 1000);
