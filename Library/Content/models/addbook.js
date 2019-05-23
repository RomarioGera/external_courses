function addBookStateInit() {
  clearMain();

  document.querySelector('.main-title').innerHTML = '<h1>Add a book</h1>';
  document.querySelector('.main-nav').innerHTML = '<h2>Please complete the fields in the form:</h2>';
  book.renderAddBookFrom();
}

function renderAddBookFrom() {
  let form = document.createElement('form');
  form.className = 'form-add-book';

  form.innerHTML = '\
      <div class="form-block">\
        <div class="form-block__title">Title</div>\
        <input class="form-block__field" type="text" name="title" required>\
      </div>\
      <div class="form-block">\
        <div class="form-block__title">Author First Name</div>\
        <input type="text" class="form-block__field" name="firstname" required>\
      </div>\
      <div class="form-block">\
        <div class="form-block__title">Author Last Name</div>\
        <input type="text" class="form-block__field" name="lastname" required>\
      </div>\
      <div class="form-block">\
        <div class="form-block__title">Cost</div>\
        <input type="number" class="form-block__field" name="cost" required>\
      </div>\
      <div class="form-block">\
        <div class="form-block__title">Rating</div>\
        <input type="number" class="form-block__field" name="rating" required>\
      </div>\
      <div class="form-block">\
        <div class="form-block__title">Categories</div>\
        <label><input class="form-block__field--checkbox" type="checkbox" value="1" name="category[]">Must read</label>\
        <label><input class="form-block__field--checkbox" type="checkbox" value="2" name="category[]">Best</label>\
        <label><input class="form-block__field--checkbox" type="checkbox" value="3" name="category[]">Non fiction</label>\
        <label><input class="form-block__field--checkbox" type="checkbox" value="4" name="category[]">Classic</label>\
      </div>\
      <div class="form-block">\
        <div class="form-block__title">Book cover (only jpg/jpeg)</div>\
        <input class="form-file-cover" type="file" accept="image/*" required>\
      </div>\
      <div class="form-block--submit">\
        <button class="form-block__field--submit" type="submit">Отправить</button>\
        <button class="form-block__field--return" type="button">На главную</button>\
      </div>\
  ';

  document.querySelector('.content_books_grid').appendChild(form);
  document.querySelector('.form-block__field--return').addEventListener('click', function () {
    state.mainStateInit()
  });
  document.querySelector('.form-add-book').onsubmit = function (e) {
    eventToFormSubmit.call(this, e)
  };
}

/** событие submit формы */
function eventToFormSubmit(e) {
  e.preventDefault();

  let form = document.querySelector('.form-add-book'),
    formData = new FormData(form);

  let file = document.querySelector('.form-file-cover').files[0],
    reader = new FileReader();

  reader.addEventListener("load", function () {
    Promise.resolve(formData.append('cover', reader.result))
      .then(ajax("POST", 'http://external.bulgdm.ru/addbook.php', formData).then((response) => {
        if (response == 'success') {
          state.mainStateInit()
        } else {
          alert(response)
        }
      }))
  }, false);

  if (file) {
    reader.readAsDataURL(file)
  }
}