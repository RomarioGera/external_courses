document.addEventListener('DOMContentLoaded', function () {
  var defaultRating = 5;
  renderRatingLine(defaultRating);

  var line = document.querySelector('.rating-line');
  line.addEventListener('click', function (e) {
    eventOnClickToStarLine(e);
  });
}, false);

function renderRatingLine(rating, id) {
  var line = document.querySelector('.rating-line');

  var defaultItem = document.createElement('div'),
    fullStar = document.createElement('img'),
    halfStar = document.createElement('img'),
    emptyStar = document.createElement('img');
  defaultItem.className = 'rating-line_item';
  fullStar.src = './img/full.png';
  halfStar.src = './img/half.png';
  emptyStar.src = './img/empty.png';

  var count = 1;

  line.innerHTML = '';

  for (var i = 0; i < Math.floor(rating); i++) {
    var item = defaultItem.cloneNode();
    item.append(fullStar.cloneNode());
    item.dataset.index = count++;
    line.append(item);
  }

  if (rating !== Math.floor(rating)) {
    var item = defaultItem.cloneNode();
    item.append(halfStar.cloneNode());
    item.dataset.index = count++;
    line.append(item);
  }

  for (i = 0; i < (5 - Math.ceil(rating)); i++) {
    var item = defaultItem.cloneNode();
    item.append(emptyStar.cloneNode());
    item.dataset.index = count++;
    line.append(item);
  }
}

function eventOnClickToStarLine(e) {
  if (e.target.localName !== 'img')
    return;

  var width = e.target.clientWidth,
    clickX = e.x - e.target.offsetLeft;

  var item = e.target.parentNode;

  if (width / 2 >= clickX) {
    renderRatingLine(+item.dataset.index - 0.5);
  } else {
    renderRatingLine(+item.dataset.index);
  }
}