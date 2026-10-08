let amount = document.getElementById("Amount");
let Rate = document.getElementById("Rate");
let Time = document.getElementById("Time");
let Result = document.getElementById("Result");
let but = document.getElementById("but");

but.addEventListener("click", function () {
  let a = Number(amount.value);
  let r = Number(Rate.value);
  let t = Number(Time.value);

  let dat = 0;
  dat = (a * t * r) / 100;
  Result.innerText = dat;
  console.log(dat);
});
