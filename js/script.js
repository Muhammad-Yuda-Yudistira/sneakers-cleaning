// smooth scrolling
$('.scroller').on('click', function(e) {
    e.preventDefault()

    const tujuan = $(this).attr('href')
    const tujuanElement = $(tujuan)

    $('html').animate({
        scrollTop: tujuanElement.offset().top
    }, 1000)
})

$(window).on('load', function(e) {

})