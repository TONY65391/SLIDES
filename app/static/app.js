const carousel = document.querySelector('.carousel');
const carouselList = carousel.querySelector('.list');
const thumbnails = carousel.querySelector('.thumbnails');
const thumbnailList = thumbnails.querySelector('.list');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.onclick = () => {
    carousel.classList.add('prev')
    Slider('prev');
}

next.onclick = () => {
    carousel.classList.add('next')
    Slider('next');
}

function removeOrder(){
    setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, 5000);
}
let interval;
let count = 0;
function set(){
    clearInterval(interval);
    interval = setInterval(() => {
        next.onclick();
    }, 7000);
}
set();

function Slider(request){
    removeOrder();
    set();
    const carouselItems = carouselList.querySelectorAll('.item');
    const thumbnailItems = thumbnailList.querySelectorAll('.thumbnail');
    const lastItem = carouselItems[carouselItems.length - 1]
    const lastThumbnail = thumbnailItems[thumbnailItems.length - 1]
    if (request === 'prev'){
        carouselList.prepend(lastItem);
        thumbnailList.prepend(lastThumbnail)
    }
    else{
        carouselList.append(carouselItems[0]);
        thumbnailList.append(thumbnailItems[0]);
    }
}