$( function() {
    var count = 0;
    $(".drag_tile .img").draggable({
        containment: "document",
        revert: "invalid" ,
        helper: "clone",
        appendTo: "body",
        contents: $(this).attr('id'),
    });
    $(".drop_tile").droppable({      
       drop:function(event, ui) {
           
           // alert(event.target.id);
            //console.log(ui.draggable.attr('id'));

            if(event.target.id == "d" + ui.draggable.attr('id')) {
                ui.draggable.css({'width':'100%', 'height': '100%'});
                $(this).append(ui.draggable);
                ui.draggable.draggable("disable");
                count++;

                if(count == 8) {
                    $('.drag_tile:nth-child(1)').text("C");
                    $('.drag_tile:nth-child(2)').text("O");
                    $('.drag_tile:nth-child(3)').text("M");
                    $('.drag_tile:nth-child(4)').text("P");
                    $('.drag_tile:nth-child(5)').text("L");
                    $('.drag_tile:nth-child(6)').text("E");
                    $('.drag_tile:nth-child(7)').text("T");
                    $('.drag_tile:nth-child(8)').text("E");
                    $('.drag_tile').css({
                        'font-size':'50px',
                        'text-align': 'center',
                        'padding-top':'30px'});
                        $(".time_text").css('display', 'block');
                        $('.time_text').text(new Date());
                    }
            }
            else {
                startTimer();
            }
       },
/*        accept: ".img" ,*/
        tolerance: "fit",
    });
});

