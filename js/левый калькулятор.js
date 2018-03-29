$(document).ready(function() {

	// CALCULATE
	$(function() {
		$("#height_scroll").slider({
			animate: true,
			range: "min",
			value: 130,
			min: 40,
			max: 180,
			orientation: "vertical",
			step: 5,
			slide: function(event, ui) {
				$('#height_input').val(ui.value + " см");
			}
		});
		$('#height_input').val($("#height_scroll").slider("value") + " см")
	});

	$(function() {
	$("#width_scroll").slider({
		animate: true,
		range: "min",
		value: 140,
		min: 40,
		max: 160,
		step: 5,
		slide: function(event, ui) {
				$('#width_input').val(ui.value + " см");
			}
		});
		$('#width_input').val($("#width_scroll").slider("value") + " см")
	});

	// Изменение местоположения ползунка при вводе данных 
	$("#height_input").change(function(){
		var value=$("#height_input").val();
		if (value > $("#height_scroll").slider("option","max")) {
			value = $("#height_scroll").slider("option","max");
		} else if (value < $("#height_scroll").slider("option","min")) {
			value = $("#height_scroll").slider("option","min");
		};
		$("#height_scroll").slider("value", value);	
		$("#height_input").val(value + " см")
	});
	$("#width_input").change(function(){
		var value=$("#width_input").val();
		if (value > $("#width_scroll").slider("option","max")) {
			value = $("#width_scroll").slider("option","max");
		} else if (value < $("#width_scroll").slider("option","min")) {
			value = $("#width_scroll").slider("option","min");
		};
		$("#width_scroll").slider("value", value);	
		$("#width_input").val(value + " см")
	});

	// фильтрация ввода в поля
	jQuery('#height_input, #width_input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});


	$(".windows_calculate .item li").click(function(){
		$(".windows_calculate .item li").removeClass("active");
		$(this).addClass("active");
	});

	$(".windows_calculate .item_1 .window_1").click(function(){
		$(".windows_calculate .scroll_block .img_block img").removeClass("active");
		$(".windows_calculate .scroll_block .img_block .img_1").addClass("active");
	});
	$(".windows_calculate .item_1 .window_2").click(function(){
		$(".windows_calculate .scroll_block .img_block img").removeClass("active");
		$(".windows_calculate .scroll_block .img_block .img_2").addClass("active");
	});
	$(".windows_calculate .item_1 .window_3").click(function(){
		$(".windows_calculate .scroll_block .img_block img").removeClass("active");
		$(".windows_calculate .scroll_block .img_block .img_3").addClass("active");
	});
	$(".windows_calculate .item_1 .window_4").click(function(){
		$(".windows_calculate .scroll_block .img_block img").removeClass("active");
		$(".windows_calculate .scroll_block .img_block .img_4").addClass("active");
	});
	$(".windows_calculate .item_2 .window_1").click(function(){
		$(".windows_calculate .scroll_block .img_block img").removeClass("active");
		$(".windows_calculate .scroll_block .img_block .img_5").addClass("active");
	});
	$(".windows_calculate .item_2 .window_2").click(function(){
		$(".windows_calculate .scroll_block .img_block img").removeClass("active");
		$(".windows_calculate .scroll_block .img_block .img_6").addClass("active");
	});
	$(".windows_calculate .item_2 .window_3").click(function(){
		$(".windows_calculate .scroll_block .img_block img").removeClass("active");
		$(".windows_calculate .scroll_block .img_block .img_7").addClass("active");
	});
	$(".windows_calculate .item_2 .window_4").click(function(){
		$(".windows_calculate .scroll_block .img_block img").removeClass("active");
		$(".windows_calculate .scroll_block .img_block .img_8").addClass("active");
	});
	$(".windows_calculate .item_2 .window_5").click(function(){
		$(".windows_calculate .scroll_block .img_block img").removeClass("active");
		$(".windows_calculate .scroll_block .img_block .img_9").addClass("active");
	});
	$(".windows_calculate .item_3 .window_1").click(function(){
		$(".windows_calculate .scroll_block .img_block img").removeClass("active");
		$(".windows_calculate .scroll_block .img_block .img_10").addClass("active");
	});
	$(".windows_calculate .item_4 .window_1").click(function(){
		$(".windows_calculate .scroll_block .img_block img").removeClass("active");
		$(".windows_calculate .scroll_block .img_block .img_11").addClass("active");
	});

	$(".windows_calculate .item_1 li").click(function(){
		$("#height_scroll").slider({
			value: 130,
			min: 40,
			max: 180,
			slide: function(event, ui) {
				$('#height_input').val(ui.value + " см");
			}
		});
		$('#height_input').val($("#height_scroll").slider("value") + " см")
		$("#width_scroll").slider({
			value: 140,
			min: 40,
			max: 160,
			slide: function(event, ui) {
				$('#width_input').val(ui.value + " см");
			}
		});
		$('#width_input').val($("#width_scroll").slider("value") + " см")
	});
	$(".windows_calculate .item_2 li").click(function(){
		$("#height_scroll").slider({
			value: 140,
			min: 40,
			max: 180,
			slide: function(event, ui) {
				$('#height_input').val(ui.value + " см");
			}
		});
		$('#height_input').val($("#height_scroll").slider("value") + " см")
		$("#width_scroll").slider({
			value: 185,
			min: 100,
			max: 210,
			slide: function(event, ui) {
				$('#width_input').val(ui.value + " см");
			}
		});
		$('#width_input').val($("#width_scroll").slider("value") + " см")
	});
	$(".windows_calculate .item_3 li").click(function(){
		$("#height_scroll").slider({
			value: 200,
			min: 100,
			max: 260,
			slide: function(event, ui) {
				$('#height_input').val(ui.value + " см");
			}
		});
		$('#height_input').val($("#height_scroll").slider("value") + " см")
		$("#width_scroll").slider({
			value: 185,
			min: 100,
			max: 225,
			slide: function(event, ui) {
				$('#width_input').val(ui.value + " см");
			}
		});
		$('#width_input').val($("#width_scroll").slider("value") + " см")
	});
	$(".windows_calculate .item_4 li").click(function(){
		$("#height_scroll").slider({
			value: 200,
			min: 150,
			max: 260,
			slide: function(event, ui) {
				$('#height_input').val(ui.value + " см");
			}
		});
		$('#height_input').val($("#height_scroll").slider("value") + " см")
		$("#width_scroll").slider({
			value: 210,
			min: 150,
			max: 240,
			slide: function(event, ui) {
				$('#width_input').val(ui.value + " см");
			}
		});
		$('#width_input').val($("#width_scroll").slider("value") + " см")
	});


	$(".windows_calculate .open_form").click(function(){
		$(".modal_form #windowtype_input").val($(".windows_calculate .windows_type .scroll_block .img_block .active").attr('data-cost'));
		$(".modal_form #windowheight_input").val($(".windows_calculate #height_input").val());
		$(".modal_form #windowwidth_input").val($(".windows_calculate #width_input").val());
		selectedCheckboxValue = ""
		$('.windows_calculate .checkbox_block input:checked').each(function() {
			selectedCheckboxValue += $(this).val() + "; ";
		});
		$(".modal_form #dopitem_input").val(selectedCheckboxValue)
	});


});
