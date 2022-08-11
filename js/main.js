const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

const anchorUsed = document.querySelector('#link');


navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/nav/NAV-CLOSE.svg";
        document.body.classList.toggle('no-scroll');
    } else {
        navBtnImg.src = "./img/nav/nav-open.svg";
        document.body.classList.toggle('no-scroll');
    }
}

/*
anchorUsed.onlick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/nav/NAV-CLOSE.svg";
        document.body.classList.toggle('no-scroll');
    } else {
        navBtnImg.src = "./img/nav/nav-open.svg";
        document.body.classList.toggle('no-scroll');
    }
}
*/
AOS.init({
   once: true,
   //disable: 'mobile',
});
