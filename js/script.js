// smooth scrolling
$('.scroller').on('click', function(e) {
    e.preventDefault()

    const tujuan = $(this).attr('href')
    const tujuanElement = $(tujuan)

    $('html').animate({
        scrollTop: tujuanElement.offset().top
    }, 1000)
})

// menu active
const berganti = document.querySelectorAll('.berganti')

berganti.forEach((hal) => {
    // bersihkeun menu
    hal.addEventListener('click', function(e) {
        const berganti = document.querySelectorAll('.berganti')
        for(let i = 0; i < berganti.length; i++) {
            if(berganti[i].classList.contains('active')) {
                berganti[i].classList.remove('active')
            }
        }
        // aktifkeun menu
        e.target.classList.add('active')
        // cokot section nu dituju
        const tujuan = hal.getAttribute('href')
        const elementTujuan = document.querySelector(tujuan)
        // bersihkan halaman
        const lembar = document.querySelectorAll('.lembar')
        for(let i = 0; i < lembar.length; i++) {
            lembar[i].style.display = 'none'
        }
        // jalanken
        elementTujuan.style.display = 'flex'
        const altFooter = document.querySelector('footer')
        altFooter.classList.add('alternative')
    }) 
});