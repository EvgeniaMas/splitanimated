$(document).ready(function() {
  $('.color-choose label').on('click', function(e) {  
   var currentcard = e.target.parentElement.parentElement.parentElement;  
   var attributes = e.target.parentElement.getAttribute('name');
    var colors = $(currentcard).find('.active');   
   $(colors).removeClass('active');
   $(currentcard).find('img[data-image = ' + attributes + ']').addClass('active'); 
   });
 });


$('select[name="model"]').change(function(e){
var currentcard = e.target.parentElement;
  var current_text = $(currentcard).find('.model');   
    var el = $(this).val();
    $(current_text).html(el);
});
 

 var els = document.getElementsByClassName('model');
var defaultValue = document.getElementsByClassName('userselect');
for(var i in els){
els[i].innerHTML = defaultValue[i].options[0].value;
} 