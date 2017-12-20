// English and Chinese
function chn(){
	$(".eng").hide();
	$(".chn").show("fast");
	return false;
}
function eng(){
	$(".chn").hide();
	$(".eng").show("fast");
}










// form style
function onFocus(x){
	if (x.value == x.defaultValue){
		x.value = '';
		x.style.color = 'rgba(0, 0, 0, 0.8)';
	}
	else if (x.value != x.defaultValue){
		x.style.color = 'rgba(0, 0, 0, 0.8)';
	}
}
function onBlur(x){
	if (x.value == ''){
		x.value = x.defaultValue;
		x.style.color = 'rgba(0, 0, 0, 0.4)';
	}
	else if (x.value != ''){
		x.style.color = 'rgba(0, 0, 0, 0.4)';
	}
}



// Scroll to Top
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#toTop').fadeIn("fast");
    } 
    else {
        $('#toTop').fadeOut("fast");
    }
});



// Hide and Show
function slideToggle(){
	$("div.launchpad").slideToggle("");
}
function hide(){
	$("#launchpad").hide("");
}


// Log in 
function login() {
	var p = document.getElementById("password").value;
	if (p == "ll"){
		location.href = "texts.html";
	}
	else {
		window.alert("ID not recognized!")
	}
}


// Need a reply / Attach a file
function reply(x){
	if(x.checked){
		$("p#email-phone").show("");
	} else {
		$("p#email-phone").hide("");
	}
}
function attach(x){
	if(x.checked){
		$("p#attachment").show("");
	} else {
		$("p#attachment").hide("");
	}
}