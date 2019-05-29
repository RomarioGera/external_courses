function saveItem(key, value) {
    localStorage.setItem(key, value);
}

function getExistedHistory(){
    var existedHistory = JSON.parse(localStorage.history);
    renderExistedHistory(existedHistory);
}

function renderExistedHistory(existedHistory){
    let historyBlock = document.querySelector('.aside-history');
    historyBlock.innerHTML = existedHistory;
}