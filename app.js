const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
    setupClickHandler('btn1')
    setupClickHandler('btn2')
});

function setupClickHandler(btnName) {
    var btn = document.getElementById(btnName);
    btn.onclick = () => {
        ipcRenderer.send('show-message', btn.innerText);
    }
}