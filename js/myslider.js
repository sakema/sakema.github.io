var hwSlideSpeed = 3000;
var hwTimeOut = 3000;
 
$(document).ready(function(e) {
    $('.slide').css({"position" : "absolute","top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#slider .slide").size();
    var animSlide = function(arrow){
        clearTimeout(slideTime);
        $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
        if(arrow == "next"){
            if(slideNum == (slideCount-1)){
				slideNum=0;
				}
            else
			{slideNum++}
            }
        else if(arrow == "prew")
        {
            if(slideNum == 0){slideNum=slideCount-1;}
            else
			{slideNum-=1}
        }
        else{
            slideNum = arrow;
            }
        $('.slide').eq(slideNum).fadeIn(hwSlideSpeed);
        }
		$('#nextbutton').click(function(){
        animSlide("next");
        })
    $('#prewbutton').click(function(){
        animSlide("prew");
        })
		
});