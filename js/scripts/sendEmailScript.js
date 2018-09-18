/*
	Script Documentation
	Purpose: Use JQuery to display level of skill (represented by stars) in a list of elements in my HTML.
	Author: Jacob Hayes
	Last Edited: August 29th 2018 6:28pm
	Next Step: Add some animations to make it more attractive to the eye on the page
*/

"use strict";

$(document).ready(function(){
	$(".skillsList li").filter(":odd").hide().end();	//Hide all of the odd elements in the list of skills

	$(".skillsList li").filter(":even").mouseenter(function(){	//execute function when li is hovered
		$(this).next().show();	//Show the list element that is the next item in the list. See HTML under Developer Skills
		$(this).hide();			//Hide the current selection

	});//end skill hover

	$(".skillsList li").filter(":odd").mouseleave(function(){
		$(this).prev().show(); //Show the list element that is the previous item in the list. See HTML under Developer Skills
		$(this).hide();		//Hide the current selection
	});
});//end document.ready