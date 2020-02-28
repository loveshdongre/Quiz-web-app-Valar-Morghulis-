$(document).ready(function() {
    $("svg").css('visibility','hidden');
    var truePath = ['winter', 'horn', 'white', 'eyrie', 'river', 'king'];
    var cur = 0;
    $('.node').click(function(){
        if($(this).attr('id') == truePath[cur + 1]) {
            $(this).addClass('node_active');
            cur++;
            $("#svg_"+ cur).css('visibility','visible');
            if(cur == 5) {
                window.location.href = "level3.html";
            }
        }
        else {
            if(!$(this).hasClass('node_active')) {
                startTimer();
            }
        }
    });
});