	function startTimer()
{
	document.getElementById("div").style.visibility="visible";
	myTimer = setInterval(myCounter, 1000);
	
}
var c = 120;
function myCounter() {
  document.getElementById("demo").innerHTML = --c;
  if(c==0)
  {
	  clearInterval(myTimer);
	  c=120;
	  document.getElementById("div").style.visibility="hidden";
	  
  }
}