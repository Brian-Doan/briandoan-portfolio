/* ====================== TOGGLE MENU ====================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

    /* ================= Show Menu ================= */
if (navToggle) {
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu');
    })
}
    /* ================= Hide Menu ================= */
if (navClose) {
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu');
    })
}

/* ====================== TOGGLE MENU MOBILE ====================== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // when click on nav__link --> remove the "show-menu" class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* ====================== TOGGLE SKILLS LIST ====================== */
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkillsList() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__hide';
    }
    if (itemClass === 'skills__content skills__hide') {
        this.parentNode.className = 'skills__content skills__show';
    }
}

skillsHeader.forEach((element) => {
    element.addEventListener('click', toggleSkillsList);
});

/* ====================== SHOW SERVICES MODAL ====================== */
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalClose = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('show-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('show-modal');
        });
    });
});

/* ====================== PORTFOLIO SWIPER ====================== */
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* ====================== CERTIFICATES SWIPER ====================== */
let swiperCertificate = new Swiper(".certificate__container", {
    loop: true,
    grabCursor: true,
    spaceBetweens: 150,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
});

/* ====================== SCROLL SECTIONS ACTIVE LINK ====================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY  > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/* ====================== CHANGE BACKGROUND HEADER ====================== */
function scrollHeader() {
    const nav = document.getElementById('header');
    // When the scroll is higher than 80 viewport height --> add the scroll-header class
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/* ====================== SHOW SCROLL UP  ====================== */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height --> add the show-scroll
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

/* ====================== DARK MODE CHANGE ====================== */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// Validate if the user previously chose a theme 
if (selectedTheme) {
    // If the validation is completed --> activated or deactivated the dark-theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate/Deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme 
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // Save the theme and the current icon that the user chosen
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/* ====================== LANGUAGE CHANGE ====================== */
const languageButton = document.getElementById('language-button');

function translateToVietnamese() {
    document.getElementById('home-title').innerHTML = 'Xin ch??o, m??nh l?? Brian'
    document.getElementById('home-subtitle').innerHTML = 'Sinh vi??n n??m 4 ?????i h???c C??ng ngh??? Th??ng tin - ??HQG TPHCM'
    document.getElementById('home__contact-me').innerHTML = 'Li??n h???' + "<i class='uil uil-facebook-messenger button__icon'></i>"
    document.getElementById('home-scroll').innerHTML = "<i class='uil uil-mouse home__scroll-mouse'></i><span class='home__scroll-name'>" + 'K??o xu???ng ????? xem th??m' + "</span><i class='uil uil-arrow-down home__scroll-arrow'></i>"
    document.getElementById('about-title').innerHTML = 'V??? Brian'
    document.getElementById('about-subtitle').innerHTML = 'Gi???i thi???u s?? l?????c v??? m??nh'
    document.getElementById('about-description').innerHTML = 'M??nh l?? Quang, nh??ng c?? th??? g???i m??nh l?? Brian. M??nh sinh n??m 2000 t???i th??nh ph??? M??? Tho, t???nh Ti???n Giang - m???t t???nh thu???c mi???n T??y n?????c Vi???t Nam. Hi???n t???i m??nh ??ang l?? Sinh vi??n n??m 4 ?????i h???c C??ng ngh??? Th??ng tin - ??HQG TPHCM. M??nh ??ang h???c v??? thi???t k??? UI/UX, v???i mong ?????c tr??? th??nh m???t Front-end Developer trong t????ng lai.'
    document.getElementById('about__info-gpa').innerHTML = '??i???m TB'
    document.getElementById('about__info-project').innerHTML = '????? ??n' + "<br>" + 'm??n h???c'
    document.getElementById('about__info-mark').innerHTML = '??i???m t???ng k???t' + "<br>" + 'm??n UI/UX Design'
    document.getElementById('my-gpa').innerHTML = 'Chi ti???t b???ng ??i???m' + "<i class='uil uil-download-alt button__icon'></i>"
    document.getElementById('skills-title').innerHTML = 'K??? n??ng'
    document.getElementById('skills-subtitle').innerHTML = 'Qu?? tr??nh h???c UI/UX c???a m??nh'
    document.getElementById('skill-1__title-dmy').innerHTML = '1+ n??m'
    document.getElementById('skill-2__title-dmy').innerHTML = '6 th??ng'
    document.getElementById('skill-3__title-dmy').innerHTML = '1+ n??m'
    document.getElementById('services-title').innerHTML = 'Vi???c l??m t????ng lai'
    document.getElementById('services-subtitle').innerHTML = 'Vi???c m??nh mong mu???n l??m trong t????ng lai'
    document.getElementById('service-1__title').innerHTML = 'Thi???t k???' + "<br>" + 'UI/UX'
    document.getElementById('view-more-1').innerHTML = 'Xem th??m' + "<i class='uil uil-arrow-right button__icon'></i>"
    document.getElementById('view-more-2').innerHTML = 'Xem th??m' + "<i class='uil uil-arrow-right button__icon'></i>"
    document.getElementById('services__modal-title-1').innerHTML = 'Thi???t k??? UI/UX'
    document.getElementById('service-1__description-1').innerHTML = 'Thi???t k??? giao di???n ng?????i d??ng'
    document.getElementById('service-1__description-2').innerHTML = 'Thi???t k??? tr???i nghi???m ng?????i d??ng'
    document.getElementById('service-1__description-3').innerHTML = 'Chu???n SEO'
    document.getElementById('service-2__description-1').innerHTML = 'Vi???t code & ph??t tri???n giao di???n ng?????i d??ng'
    document.getElementById('service-2__description-2').innerHTML = 'Vi???t code & ph??t tri???n tr???i nghi???m ng?????i d??ng'
    /* document.getElementById('portfolio-title').innerHTML = 'V??? Brian' */
    document.getElementById('portfolio-subtitle').innerHTML = 'M???t s??? ????? ??n m??n h???c g???n nh???t'
    document.getElementById('portfolio__title-1').innerHTML = 'Shop b??n gi??y online'
    document.getElementById('portfolio__description-1').innerHTML = '????? ??n full-stack - bao g???m Front-end v?? Back-end'
    /* document.getElementById('portfolio__title-2').innerHTML = '' */
    document.getElementById('portfolio__description-2').innerHTML = '????? ??n thi???t k??? UI/UX - ???ng d???ng ?????t v?? v???n chuy???n ????? ??n tr??n thi???t b??? di ?????ng'
    document.getElementById('portfolio__title-3').innerHTML = 'Website hi???n ?????i'
    document.getElementById('portfolio__description-3').innerHTML = 'Website t????ng th??ch v???i h???u h???t thi???t b??? - bao g???m giao di???n ng?????i d??ng v?? c??c hi???u ???ng t????ng t??c (??ang b???o tr??)'
    document.getElementById('project-title').innerHTML = 'B???n ??ang c?? c??c d??? ??n?'
    document.getElementById('project-description').innerHTML = 'M??nh ???? s???n s??ng ????? tr??? th??nh Intern/Fresher cho c??c d??? ??n v???a v?? nh???'
    document.getElementById('project__button-contact').innerHTML = 'Li??n h???' + "<i class='uil uil-message project__icon button__icon'></i>"
    document.getElementById('contact-title').innerHTML = 'Li??n h??? v???i Brian'
    document.getElementById('contact-subtitle').innerHTML = 'C??c ph????ng th???c li??n l???c'
    document.getElementById('contact__title-phone').innerHTML = 'SDT'
    document.getElementById('contact__title-location').innerHTML = '?????a ch???'
    document.getElementById('contact__label-name').innerHTML = 'T??n'
    document.getElementById('contact__label-project').innerHTML = 'D??? ??n'
    document.getElementById('contact__label-message').innerHTML = 'N???i dung tin nh???n'
    document.getElementById('contact__button-send').innerHTML = 'G???i tin nh???n' + "<i class='uil uil-message button__icon'></i>"
    document.getElementById('footer-subtitle').innerHTML = 'Sinh vi??n Front-end'
    document.getElementById('footer__link-services').innerHTML = 'Vi???c l??m t????ng lai'
    /* document.getElementById('footer__link-portfolio').innerHTML = '' */
    document.getElementById('footer__link-contact').innerHTML = 'Li??n h???'
}

function translateToEnglish() {
    document.getElementById('home-title').innerHTML = "Hi, I'm Brian"
    document.getElementById('home-subtitle').innerHTML = 'Student of the University of Information Technology - Ho Chi Minh City'
    document.getElementById('home__contact-me').innerHTML = 'Contact Me' + "<i class='uil uil-facebook-messenger button__icon'></i>"
    document.getElementById('home-scroll').innerHTML = "<i class='uil uil-mouse home__scroll-mouse'></i><span class='home__scroll-name'>" + 'Scroll down'
    document.getElementById('about-title').innerHTML = 'About Brian'
    document.getElementById('about-subtitle').innerHTML = 'Short description about me'
    document.getElementById('about-description').innerHTML = "I was born in 2000 in My Tho City, a city belongs to Tien Giang Province, which is located at the westside of Vietnam. Now I'm a senior of the University of Information Technology - Vietnam National University of Ho Chi Minh City. I'm learning UI/UX design, and have a desire to work as a Front-end Developer in the future."
    document.getElementById('about__info-gpa').innerHTML = 'GPA'
    document.getElementById('about__info-project').innerHTML = 'Completed' + "<br>" + 'School projects'
    document.getElementById('about__info-mark').innerHTML = 'Mark of' + "<br>" + 'UI/UX Design subject'
    document.getElementById('my-gpa').innerHTML = 'Download GPA board' + "<i class='uil uil-download-alt button__icon'></i>"
    document.getElementById('skills-title').innerHTML = 'Skills'
    document.getElementById('skills-subtitle').innerHTML = 'My learning progress'
    document.getElementById('skill-1__title-dmy').innerHTML = '1+ year'
    document.getElementById('skill-2__title-dmy').innerHTML = '6 months'
    document.getElementById('skill-3__title-dmy').innerHTML = '1+ year'
    document.getElementById('services-title').innerHTML = 'Future Services'
    document.getElementById('services-subtitle').innerHTML = 'Things I do in the future'
    document.getElementById('service-1__title').innerHTML = 'UI/UX' + "<br>" + 'Designer'
    document.getElementById('view-more-1').innerHTML = 'View more' + "<i class='uil uil-arrow-right button__icon'></i>"
    document.getElementById('view-more-2').innerHTML = 'View more' + "<i class='uil uil-arrow-right button__icon'></i>"
    document.getElementById('services__modal-title-1').innerHTML = 'UI/UX Designer'
    document.getElementById('service-1__description-1').innerHTML = 'Design the User Interface'
    document.getElementById('service-1__description-2').innerHTML = 'Design the User Experience'
    document.getElementById('service-1__description-3').innerHTML = 'Match SEO standards'
    document.getElementById('service-2__description-1').innerHTML = 'Write code & Develop the User Interface'
    document.getElementById('service-2__description-2').innerHTML = 'Write code & Develop the User Experience'
    /* document.getElementById('portfolio-title').innerHTML = 'V??? Brian' */
    document.getElementById('portfolio-subtitle').innerHTML = 'My recent projects'
    document.getElementById('portfolio__title-1').innerHTML = 'Sneakers Online Shop'
    document.getElementById('portfolio__description-1').innerHTML = 'My full-stack project - a Sneakers Online Shop with both front-end and back-end.'
    /* document.getElementById('portfolio__title-2').innerHTML = '' */
    document.getElementById('portfolio__description-2').innerHTML = 'My UI/UX design project - a food delivery mobile application.'
    document.getElementById('portfolio__title-3').innerHTML = 'Modern Website'
    document.getElementById('portfolio__description-3').innerHTML = 'Website adaptable to all devices, with UI components and animated interactions.'
    document.getElementById('project-title').innerHTML = 'You have a new project'
    document.getElementById('project-description').innerHTML = "You can contact me. I'm ready to work as an(a) Intern/Fresher for small projects."
    document.getElementById('project__button-contact').innerHTML = 'Contact me' + "<i class='uil uil-message project__icon button__icon'></i>"
    document.getElementById('contact-title').innerHTML = 'Contact Me'
    document.getElementById('contact-subtitle').innerHTML = 'Get in touch'
    document.getElementById('contact__title-phone').innerHTML = 'Call me'
    document.getElementById('contact__title-location').innerHTML = 'Location'
    document.getElementById('contact__label-name').innerHTML = 'Name'
    document.getElementById('contact__label-project').innerHTML = 'Project'
    document.getElementById('contact__label-message').innerHTML = 'Message'
    document.getElementById('contact__button-send').innerHTML = 'Send message' + "<i class='uil uil-message button__icon'></i>"
    document.getElementById('footer-subtitle').innerHTML = 'Front-end Senior Student'
    document.getElementById('footer__link-services').innerHTML = 'Services'
    /* document.getElementById('footer__link-portfolio').innerHTML = '' */
    document.getElementById('footer__link-contact').innerHTML = 'Contact'
}

function translateLanguage() {
    var currentLanguage = languageButton.innerHTML;
    // console.log(currentLanguage);
    if (currentLanguage === 'VN') {
        languageButton.innerHTML = 'EN'
        translateToVietnamese();
    }
    if (currentLanguage === 'EN') {
        languageButton.innerHTML = 'VN'
        translateToEnglish();
    }
}

languageButton.addEventListener('click', translateLanguage);


