document.addEventListener('DOMContentLoaded', function () {
  var number = 0,
    btn = document.querySelector('.button');
  btn.addEventListener('click', function () {
    var element = document.createElement('div'),
      container = document.querySelector('.container');
    element.className = "element-" + number++;
    element.innerText = 'Element ' + number;
    prepend(container, element);
  });
}, false);

function prepend(block, elem) {
  block.insertBefore(elem, block.firstChild);
}