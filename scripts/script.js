function $(str) {
    if (str[0]=='.') {
        return document.getElementsByClassName(str.substring(1));
    } else if (str[0]=='#') {
        return document.getElementById(str.substring(1));
    } else {
        return document.getElementsByTagName(str); 
    }
}
    
$('#_send').onclick = function() {
    var div = document.createElement('div');
    div.className = 'line';
    $('._section')[0].appendChild(div);
    var str = $('#$value').value;
    var p = document.createElement('p');
    
    p.innerHTML = str;
    $('#$value').value = '';
    div.appendChild(p);
}