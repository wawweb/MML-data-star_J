// var numberOfEls = 1000;
// var duration = 8000;
// var midScreenX = window.innerWidth / 2;
// var midScreenY = window.innerHeight / 2;
// var radius = Math.sqrt(midScreenX * midScreenX + midScreenY * midScreenY);
// var fragment = document.createDocumentFragment();

// for (var i = 0; i < numberOfEls; i++) {
//   var hue = Math.round(360 / numberOfEls * i);
//   var angle = Math.random() * Math.PI * 2;
//   var el = document.createElement('div');
//   el.classList.add('particule');
//   el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
//   el.style.width = '1px';
//   el.style.height = '1px';
//   anime({
//     targets: el,
//     width: ['1px', '10px'],
//     height: ['1px', '10px'],
//     left: [midScreenX + 'px', Math.cos(angle) * radius + midScreenX + 'px'],
//     top: [midScreenY + 'px', Math.sin(angle) * radius + midScreenY + 'px'],
//     delay: (duration / numberOfEls) * i,
//     duration: duration,
//     easing: 'easeInExpo',
//     loop: true
//   });
//   fragment.appendChild(el);
// }

// document.body.appendChild(fragment);


(() => {
    setInterval(() => {
        setTimeout(() => {
            $("main .bonusPoint .bonusPoint__slogan p.item__value").css("color", "#0e40fc")
        }, 300);
        setTimeout(() => {
            $("main .bonusPoint .bonusPoint__slogan p.item__value").css("color", "#c40606")
        }, 800);
    }, 1100);
})();


(() => {
    setInterval(() => {
        $("main .bonusPoint .bonusPoint__nums li.nums__9").removeClass("active")

        setTimeout(() => {
            $("main .bonusPoint .bonusPoint__nums li.nums__9").addClass("active")
        }, 100);
        
    }, 6000);
})();




