// --- Scroll'un sağa ve sola gidebilmesi için alttaki kod çalışmaktadır :

// scroll button'larının seçilmesi :
const btnLeftScroll = document.querySelector('.scroll__left');
const btnRightScroll = document.querySelector('.scroll__right');

// post slider div'inin seçilmesi :
const postSlider = document.querySelector('.post-slider');

// movie card'ın seçilmesi
const movieCard = document.querySelector('.movie-card');

// scroll button'larının çalışması :
btnRightScroll.addEventListener('click', () => {
    postSlider.scrollLeft += movieCard.offsetWidth;

    console.log('Scroll Left', postSlider.scrollLeft);
    console.log('Scroll Offset', postSlider.offsetWidth);
    console.log('Scroll Offset + Left', postSlider.offsetWidth + postSlider.scrollLeft);
    console.log('Scroll Width', postSlider.scrollWidth);
})

btnLeftScroll.addEventListener('click', () => {
    postSlider.scrollLeft -= movieCard.offsetWidth;

    console.log('Scroll Left', postSlider.scrollLeft);
    console.log('Scroll Offset', postSlider.offsetWidth);
    console.log('Scroll Offset + Left', postSlider.offsetWidth + postSlider.scrollLeft);
    console.log('Scroll Width', postSlider.scrollWidth);
})

// scroll button'larının dinamik bir şekilde kaybolması :

