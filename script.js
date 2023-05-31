let stars =  document. getElementById('stars');
let moon =  document. getElementById('moon');
let mountains_behind =  document. getElementById('mountains_behind');
let mountains_front = document. getElementById('mountains_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll',function(){ 
    function scrollHandler() {
let value = window.scrollY;

// Belirli bir yüksekliğe ulaştığında scroll olayını durdur
if (value >= 650) {
window.removeEventListener('scroll', scrollHandler);
} else {
stars.style.left = value * 0.25 + 'px';
moon.style.top = value * 1.05 + 'px';
mountains_behind.style.top = value * 0.2 + 'px';
mountains_front.style.top = value * 0.2 + 'px';
text.style.marginRight = value * 4 + 'px';
text.style.marginTop = value * 1.5 + 'px';
btn.style.marginTop = value * 1.5 + 'px';
header.style.top = value * 0.5 + 'px';
}
}

window.addEventListener('scroll', scrollHandler);

})