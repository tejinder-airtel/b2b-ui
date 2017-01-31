
import { OnInit } from '@angular/core';
declare var $:any;


export class BaseClass implements OnInit {

    ngOnInit() {
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
  }

}