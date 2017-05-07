function findGetParameter(parameterName) {
    let result = null,
        tmp = [];
    location.search
        .substr(1)
        .split('&')
        .forEach(item => {
            tmp = item.split('=');
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

document.addEventListener('DOMContentLoaded', () => {
    let msg = findGetParameter('message');
    var theDiv = document.getElementById('message');
    theDiv.innerHTML = 'Message received: <b>' + msg + '</b>';
});