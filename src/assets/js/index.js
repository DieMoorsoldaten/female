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

    toTopBtn.addEventListener('click', function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });
});

jQuery("document").ready(function($){
 
	var nav = $('.nav-container');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 136) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});
 
});