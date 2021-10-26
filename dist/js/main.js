const menutButton = document.getElementById("menu");
const listMenu = document.getElementById("list-menu");

menutButton.addEventListener("click", function () {
    listMenu.classList.toggle("menu-show");

    console.log("run")
})

const testimoni = new Swiper(".testimoni-slider", {
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    pagination: {
        el: ".pagination",
        type: "fraction",
    },
    slidesPerView: 1,
    autoplay: true,
    spaceBetween: 30,
    grabCursor: true,
    breakpoints: {
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});

const topBTN = document.getElementById("top");
topBTN.addEventListener("click", function () {
    window.scrollTo(0, 0);
})

// DISABLE ALL IMAGES DRAG
const allImages = document.querySelectorAll("img");
for (let i = 0; i < allImages.length; i++) {
    allImages[i].draggable = false;
    allImages[i].setAttribute("loading", "lazy");
}

// CLOSE PROMO
const closeBtn = document.querySelector(".close");
const bannerPromo = document.querySelector(".banner-promo");

closeBtn.addEventListener("click", function () {
    bannerPromo.style.display = "none";
});