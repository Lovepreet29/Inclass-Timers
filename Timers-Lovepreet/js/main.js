// your js here...
let timerimage = setTimeout(updateSlide, 3000);
clearTimeout(timerimage);
let slideshowInterval;

slideshowInterval = setInterval(function () {
    currentImg += 1;
    if (currentImg == images.length)
     { currentImg = 0; }
    updateSlide(currentImg) }, 3000);

let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;
document.querySelector('.carousel>img').src = 'images/' + images[0];
for (let idx = 0; idx < images.length; idx += 1) {
    document.querySelector('.image-tracker').innerHTML += '<span data-idx="' + idx + '">&bull;</span>';
}
document.querySelector('.image-tracker').querySelector('span').classList.add('active');
document.querySelector('.carousel').addEventListener('click', function(evt) {
    let target = evt.target;
    if (target.classList.contains('control') || target.hasAttribute('data-idx')) {
        if (target.classList.contains('next')) {
            currentImg += 1;
            currentImg = (currentImg >= images.length) ? 0 : currentImg;
        } else if (target.classList.contains('prev')) {
            currentImg -= 1;
            currentImg = (currentImg < 0) ? images.length - 1 : currentImg;
        } else {
            currentImg = Number(target.dataset.idx);
        }
        updateSlide(currentImg);
    }
});
function updateSlide(index) {
    document.querySelector('.carousel>img').src = 'images/' + images[index];
    document.querySelector('.image-tracker .active').classList.remove('active');
    document.querySelectorAll('[data-idx]')[index].classList.add('active');
}
document.addEventListener('keydown', function(evt) {
    let click;
    switch (evt.keyCode) {
        case 39:
            click = new MouseEvent('click', { bubbles: true });
            document.querySelector('.carousel .control.next').dispatchEvent(click);
            break;
        case 37:
            click = new MouseEvent('click', { bubbles: true });
            document.querySelector('.carousel .control.prev').dispatchEvent(click);
            break;
    }
});