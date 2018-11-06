$(document).ready(function() {
    $('form textarea').on('keyup', function() {
        const remainingChars = 140 - $('form textarea')[0].textLength;
        $('.counter').html(remainingChars);
    })
});