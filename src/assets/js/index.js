function handleClassNameForAnimation(list, className, offset) {
    let self = this;
    self.list = list;
    self.offset = offset;
    self.className = className;

    for (let i = 0; i < self.list.length; i++) {
        let el = document.querySelectorAll(self.list[i]);

        if (!el.length) {
            continue
        }

        for (let j = 0; j < el.length; j++) {
            el[j].classList.add(self.className);
        }

        new WOW({
            boxClass: self.className,
            offset: self.offset,
        }).init();
    }
}

// let listElForAnim_1 = [
//     '.main-section p',
//     '.main-heading p',
//     '.main-heading li',
// ];
let listElForAnim_2 = [
    '.anime h2',
    '.anime h3',
    '.anime h4',
    '.anime h5',
    '.anime p',
    '.anime label',
    '.anime button',
    '.anime select',
    '.anime a',
    '.anime img',
];
// let listElForAnim_3 = [ 

// ]; 

// handleClassNameForAnimation(listElForAnim_1, 'fadeInUp', 50);
handleClassNameForAnimation(listElForAnim_2, 'fadeIn', 100);
// handleClassNameForAnimation(listElForAnim_3, 'widthIn', 50);

$(document).ready(function () {
    $(".burger").click(function () {
        $('.header').toggleClass("btn-active");
        $('body').toggleClass("menu-fixed");
    });
});

document.addEventListener('DOMContentLoaded', () => {

    let toTopBtn = document.querySelector('.to-up');

    window.onscroll = function () {
        if (window.pageYOffset > 580) {
            toTopBtn.style.display = 'block';
        } else {
            toTopBtn.style.display = 'none';
        }
    }

    // плавный скролл наверх 
    toTopBtn.addEventListener('click', function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });
});