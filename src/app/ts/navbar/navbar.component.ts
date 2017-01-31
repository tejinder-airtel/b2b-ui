import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'tbs-navbar',
  templateUrl: './navbar.component.html',
 styleUrls: ['../../css/style.css','../../css/reset.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
    $('nav li').hover(
  function() {
	  $('ul', this).stop().slideDown(200);
  },
	function() {
    $('ul', this).stop().slideUp(200);
  }
);
  }
 }
