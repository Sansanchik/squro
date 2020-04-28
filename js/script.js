$(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
    });
});
let One = document.querySelector('#one');
One.oninput = () => {
    document.querySelector('#first-point').innerHTML = One.value;
}

let TwO = document.querySelector('#two');
TwO.oninput = () => {
    document.querySelector('#second-point').innerHTML = TwO.value;
}
document.querySelector('#more-points').onclick = () => {

    let totalPoint = (document.querySelector('#one').value * document.querySelector('#two').value);
    document.querySelector('#total-point').innerHTML = totalPoint;
}

const modal = document.getElementById('modal');
const subscribe = document.getElementById('singin-block-signin');
const modalClose = document.getElementById('modalClose');

subscribe.onclick = () => {
    modal.style.visibility = "visible";
}

modalClose.onclick = () => {
    modal.style.visibility = "hidden";
}
document.addEventListener('keypress', function (e) {
    if (e.keyCode === 27) document.getElementById('modal').hidden = 1;
}); 