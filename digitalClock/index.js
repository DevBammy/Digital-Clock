function clock() {
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  h = new Date().getHours();
  m = new Date().getMinutes();
  s = new Date().getSeconds();

  hour.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;
}
//

const interval = setInterval(clock, 1000);
