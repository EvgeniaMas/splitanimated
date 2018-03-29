$(document).ready(function() {
  $('.color-choose label').on('click', function(e) {  
   var currentcard = e.target.parentElement.parentElement.parentElement;  
   var attributes = e.target.parentElement.getAttribute('name');
    var colors = $(currentcard).find('.active');   
   $(colors).removeClass('active');
   $(currentcard).find('img[data-image = ' + attributes + ']').addClass('active'); 
   });

$('.buy_btn').on('click',function(e){
    var buttonClicked = e.target;   
     
    var currentcard = e.target.parentElement.parentElement.parentElement; 
    var product = $(currentcard).find('.model_title').text(); 
    $('.buy_condition').html("Заказать " + '<br>' + product);   
               
    });
 });


$('select[name="model"]').change(function(e){
var currentcard = e.target.parentElement;
  var current_text = $(currentcard).find('.model'); 
  var current_product = $(currentcard).find('.model_title'); 
  var models= $(this).find('option:selected').attr('name');
  
    var el = $(this).val();
    $(current_text).html(el);
    $(current_product).html(models);
    console.log(models);
});
 

var condmodel = document.getElementsByClassName('model_title');
var els = document.getElementsByClassName('model');
var defaultValue = document.getElementsByClassName('userselect');
// var current_model = defaultValue[0].options[0].data('data-models');


for(var i in els){
els[i].innerHTML = defaultValue[i].options[0].value;
var current_model = defaultValue[i].options[0].getAttribute('name');
// console.log(current_model);
// console.log(condmodel);
condmodel[i].innerHTML =current_model;
} 



