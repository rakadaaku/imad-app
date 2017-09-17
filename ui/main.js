console.log('Loaded!');
//change the text
var element = document.getElementById('main-text');
element.innerHTML = 'new value' ;

//moving image
var element = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10 ;
    madi.style.marginLeft = marginLeft + 'px';
}
madi.onclick = function () {
    var interval = setInterval(moveRight,100);
};