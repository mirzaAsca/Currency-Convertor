let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let eur = document.getElementById("eur").value;
  let gbp = document.getElementById("gbp");
  let usd = document.getElementById("usd");
  gbp.value = eur * 0.88;
  usd.value = eur * 1.04;
});
