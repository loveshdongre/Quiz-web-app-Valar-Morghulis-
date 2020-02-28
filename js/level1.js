$(document).ready(function() {
    $('#sym_submit').click(function() {
        if($("#sym_inp").val().trim().toUpperCase() == "PARULKAR") {
            window.location.href = "level2.html";
        }
        else if($("#sym_inp").val().trim() == "") {
            alert("Field is empty");
        }
        else{
            startTimer();
        }
    });
});