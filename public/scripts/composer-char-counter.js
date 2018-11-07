$(document).ready(function() {
    $('form textarea').on('input', function(event) {
        const characterLimit = 140;
        const $textArea = $(event.target);
        const remainingChars = characterLimit - $textArea.val().length;
        const $counter = $textArea.parent().find('.counter');
        $counter.html(remainingChars);
        const invalid = 'invalid';
        if(remainingChars < 0) {
            $counter.addClass(invalid);
        } else {
            $counter.removeClass(invalid);
        }
    })
});