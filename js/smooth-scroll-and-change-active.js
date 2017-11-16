$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
    $(document).on('scroll', function(){
        var documentEl = $(document);
        arrowUpEl = $('#arrowUp');

        if (documentEl.scrollTop() > 65 ) {
              $(arrowUpEl).css('visibility', 'visible');
        }
        else {
              $(arrowUpEl).css('visibility', 'hidden');
        }
    });

});