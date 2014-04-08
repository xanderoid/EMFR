// Run below when the page is ready
$(document).ready(function() {
    $('#promo').cycle({
        fx: 'scrollHorz',
        timeout: 10000,
        speed: 2000,
        next: '#promonav .next',
        pager: '#promoindex',
        pause: 1,
        slideResize: true,
    });
});

