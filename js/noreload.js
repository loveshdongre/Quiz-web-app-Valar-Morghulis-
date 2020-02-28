

$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.keyCode == 82 ) { // Prevent Ctrl+Shift+I                
        return false;
    }
    else if(event.keyCode == 116)// f5
    {
    	return false;
    }
    else if(event.ctrlKey && event.keyCode == 16 && event.keyCode == 73)//ctrl+shift+i
    {
    	return false;
    }
    else if(event.altKey && event.keyCode == 115)//alt+f4;
    {
    	return false;
    }
    else if(event.ctrlKey && event.keyCode == 87)
    {
    	return false;
    }
    else if(event.ctrlKey && event.keyCode == 84)
    {
    	return false;
    }
});