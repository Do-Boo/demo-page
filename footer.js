jQuery(window).scroll(function(){

    //상단 고정
    if(jQuery(window).scrollTop() > 180 ){
	    jQuery(".btnTop").fadeIn();
    } else {
	    jQuery(".btnTop").fadeOut();
    }
});

jQuery(document).ready(function(){

    //상단으로 이동
    jQuery(".pageTop").click(function(){
        jQuery("body,html").animate({scrollTop:0},300);
        return false;
    });
    //하단으로 이동
    jQuery(".pageBottom").click(function(){
        jQuery("body,html").animate({scrollTop:jQuery(document).height()},300);
        return false;
    });

 });