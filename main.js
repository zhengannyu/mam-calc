var btn = document.getElementById('submit')
var result1 = document.getElementById('result-1')
var result2 = document.getElementById('result-2')
btn.addEventListener('click', function () {
  var w = parseInt(document.getElementById('width').value);
  var h = parseInt(document.getElementById('height').value);
  var total = (Math.ceil(w / 80)) * (h + 30) * 5;
  result1.innerHTML = 'NT$ ' + total;
  result2.innerHTML = 'NT$ ' + total * 0.9;
});