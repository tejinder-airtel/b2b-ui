$(document).ready(function(){
 
 
 $(".select-list").change(function () {
    if($(this).val() == "0") $(this).addClass("empty");
    else $(this).removeClass("empty")
});

$(".select-list").change();

	$(document).on('click' , ".acc-wrap .acc-head" , function(){
		var headWrap = $(this)
		var parentWrap = headWrap.parents('.acc-wrap').eq(0);
		var contentWrap = headWrap.next('.acc-content');
		$(parentWrap).find('.acc-head').removeClass('active').not(headWrap).next('.acc-content').stop().slideUp();
		//headWrap.addClass('active');
		$(headWrap).next('.acc-content').stop().slideToggle(function(){
			if(contentWrap.is(":visible")){
				headWrap.addClass('active');
			}else{
				headWrap.removeClass('active');
				}			
			});
	});
	
	$("input").each(function(){
		if($(this).val().length > 0){
			$(this).addClass('filled')
			}
		})
	$("input").on('keyup', function(){
		if($(this).val().length > 0){
			$(this).addClass('filled');
			}else{
				$(this).removeClass('filled');
				}
		})
		
	$("select").each(function(){
		if($(this).hasClass("ms")){
			return;
			}
		if($(this).val().length > 0){
			if($(this).val() == 0 || $(this).val() == "-1"){
				$(this).removeClass('filled');
			}else{
				$(this).addClass('filled');
				}
		}
		})
	$("select").on('change', function(){
		if($(this).val().length > 0){
				if($(this).val() == 0 || $(this).val() == "-1"){
					$(this).removeClass('filled');
				}else{
					$(this).addClass('filled');
					}
			}
		})
		
});


function getScrollBarWidth () {
    var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
        widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
    $outer.remove();
    return 100 - widthWithScroll;
};

function tableFixHeader(el, i){
		var wrapper = $(el).closest('.table-fixed-header');
		var thead = wrapper.find('.t-head');
		var tbody = wrapper.find('.t-content');
		
		if(i == 0){
			if(tbody.hasScrollBar()){
				//adding widht of scrollbar in content table width
				var scrollBarW = getScrollBarWidth();
				if(scrollBarW > 0){
					wrapper.css({"padding-right":""+scrollBarW+"px"})
					$(thead).find(".gapfiller").css({"width":""+scrollBarW+"px", "right":""+-scrollBarW+"px"})
					$(thead).find(".gapfiller2").css({"width":""+scrollBarW+"px", "right":""+-scrollBarW/2+"px"})
					$(tbody).css({"width":"calc(100% + "+scrollBarW+"px)"});
				}
			}else{
				//if scrollbar is not present then remove gap filler form head table
				$(thead).addClass('nogap');
				}
			}
		
		var w = $(el).outerWidth();
		//$(el).outerWidth(w);
		thead.find('tr:first-child th').eq(i).find(".t-cell").outerWidth(w);
		thead.height(thead.find('table').height())
		
	}

(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);
