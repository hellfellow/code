window.onscroll=()=>{
const navbar=document.querySelector('header')
if (window.pageYOffset !== 0){navbar.style.boxShadow = '0 0 10px black';}
else {navbar.style.boxShadow = '';}}


$( ".skill" ).click(function() {
  $( ".skill" ).animate({ "left": "+=50px" }, "fast" );
});



/*
window.onscroll=()=>{
if (window.pageYOffset !== 0){ 
$( ".photo" ).animate({ "top": "+=50px" }, "fast" );};};


$('.uppercard').mouseenter(function()
    {$('.uppercard').animate({'top': '-=20px'},'fast');}).mouseleave(function(){$('.uppercard').animate({'top': '+=20px'},'fast');});
*/


document.addEventListener('click',function(e){
	if(e.target.className.indexOf('slide')>1){
		
		event.preventDefault();
        const id = $(e.target).attr('href'),
		      top  = $(id).offset().top;
		
		
		$('body,html').animate({scrollTop: top}, 1000);
	};
});


$('.uppercard').mouseenter(function()
    {$('.uppercard').animate({'top': '-=20px'},'fast');}).mouseleave(function(){$('.uppercard').animate({'top': '+=20px'},'fast');});


$('.uppercard').mouseenter(function()
    {$('.uppercard').css('boxShadow', '8px 8px 8px black')}).mouseleave(function(){$('.uppercard').css('boxShadow', '5px 5px 5px black')});



