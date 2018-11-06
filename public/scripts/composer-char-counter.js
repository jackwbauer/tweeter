$(document).ready(function() {
    $('form textarea').on('keyup', function() {
        const remainingChars = 140 - $('form textarea')[0].textLength;
        const $counter = $('.counter');
        $counter.html(remainingChars);
        if(remainingChars <= 0) {
            $counter.addClass('invalid');
        } else {
            $counter.removeClass('invalid');
        }
    })
});