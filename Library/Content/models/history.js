function getDate() {
    var d = new Date();
    var curr_min = d.getMinutes();
    if (curr_min.toString().length == 1) {
        curr_min = "0" + curr_min;
    }
    var curr_hour = d.getHours();
    var date = curr_hour + ':' + curr_min;
    return date;
}


function renderHistory(item) {
    let historyBlock = document.querySelector('.aside-history');
    let menu = document.createElement('div');
    historyBlock.appendChild(menu);
    historyBlock.insertBefore(menu, historyBlock.firstChild);
    menu.className = 'aside-history__item';
    menu.innerHTML = '<p>You <span class="aside-history__book-name"><strong>' + item +
        '<p class="aside-history__time">' +
        getDate() +
        '</p><div class="aside-history__icon"><i class="fas fa-history"></i></div>';

    if (historyBlock.children.length > 3) historyBlock.removeChild(historyBlock.lastElementChild);
    let JSONHistory = JSON.stringify(historyBlock.innerHTML);
    saveItem('history', JSONHistory);
}