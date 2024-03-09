let btn = document.getElementById("submit");
let result1 = document.getElementById("result-1");
let result2 = document.getElementById("result-2");
btn.addEventListener("click", function () {
  let w = parseInt(document.getElementById("width").value);
  let h = parseInt(document.getElementById("height").value);
  let total = Math.ceil(w / 80) * (h + 30) * 5;
  result1.innerHTML = "NT$ " + Math.round(total * 1.1);
  result2.innerHTML = "NT$ " + Math.round(total * 1.1 * 0.9);
});
