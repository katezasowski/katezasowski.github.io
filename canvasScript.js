

$(document).ready(function() {

    $('.hp-button').on('click',function() {
        var toshow = '#' + $(this).attr('data-name');
        $('#homeOptions').slideUp(200,function() {
            $(toshow).slideDown(200);
        });
    });


    $('.gohome').on('click',function() {
        $(this).parent().slideUp(200,function() {
            $('#homeOptions').slideDown(200);

        });
    }); 

});