$(document).ready(function() {
  $('.color-choose label').on('click', function(e) {  
   var currentcard = e.target.parentElement.parentElement.parentElement;  
   var attributes = e.target.parentElement.getAttribute('data-color');
   var a = e.target.parentElement;
   console.log(a);
    var colors = $(currentcard).find('.active');   
   $(colors).removeClass('active');
   $(currentcard).find('img[data-image = ' + attributes + ']').addClass('active'); 
   });

$('.buy_btn').on('click',function(e){
    var buttonClicked = e.target;   
     
    var currentcard = e.target.parentElement.parentElement.parentElement;

    var product = $(currentcard).find('.model_title').text(); 
   // if (product == "") {
   //   var product = $(currentcard).find('.model_titlefixed').text(); 
   // }
    
   
    // console.log(product);
    var model_color =$(currentcard).find('img.active').attr('data-image');
    // console.log(model_color);
    $('.buy_condition').html("<span>Заказать</span> " + '<br>' + product);
    $('#selected_model').val(product); 
    $('#selected_color').val(model_color);
               
    });
   
 });


$('select[name="model"]').change(function(e){
var currentcard = e.target.parentElement;
  var current_text = $(currentcard).find('.model'); 
  var current_product = $(currentcard).find('.model_title'); 
  var models= $(this).find('option:selected').attr('data-id');
  
    var el = $(this).val();
    $(current_text).html(el);
    $(current_product).html(models);
    
    if 
      (models == "Модель: <br> ASW-H07A4/FJ-WR1") {
        $('#black_cond').removeClass('active');
        $('#grey_cond').removeClass('active');
        $('#white_cond').addClass('active');
        $('#black_cond2').removeClass('active');
        $('#grey_cond2').removeClass('active');
        $('#white_cond2').addClass('active');

    }

    else if (models == "Модель: <br> ASW-H07A4/FJ-BR1") {
      $('#grey_cond').removeClass('active');
      $('#white_cond').removeClass('active');
     $('#black_cond').addClass('active');
      $('#grey_cond2').removeClass('active');
      $('#white_cond2').removeClass('active');
     $('#black_cond2').addClass('active');

    }



    else if (models == "Модель: <br> ASW-H07A4/FJ-SR1") {
      $('#black_cond').removeClass('active');
      $('#white_cond').removeClass('active');
     $('#grey_cond').addClass('active');
      $('#black_cond2').removeClass('active');
      $('#white_cond2').removeClass('active');
     $('#grey_cond2').addClass('active');
    }

    else if (models== "Модель: <br> AWB-H09BC/R1DI") {
     $('#girl').removeClass('active');
     $('#boy').addClass('active');
     $('#girl2').removeClass('active');
     $('#boy2').addClass('active');
    }

    else if (models== "Модель: <br> AWG-H09BC/R1DI") {
     $('#boy').removeClass('active');
     $('#girl').addClass('active');
      $('#boy2').removeClass('active');
     $('#girl2').addClass('active');
    }
});
 

var condmodel = document.getElementsByClassName('model_title');
var els = document.getElementsByClassName('model');
var defaultValue = document.getElementsByClassName('userselect');
for(var i in els){
els[i].innerHTML = defaultValue[i].options[0].value;
// var current_model = defaultValue[i].options[0].getAttribute('name');
var current_model = defaultValue[i].options[0].getAttribute('data-id');
condmodel[i].innerHTML =current_model;
} 



$('.modal_obj').on('opened', function (e) {
    // var models= $(this).find('option:selected').attr('name');
    // if 
    //   (models == "Модель: <br> ASW-H07A4/FJ-WR1") {
    //     $('#black_cond2').removeClass('active');
    //     $('#grey_cond2').removeClass('active');
    //     $('#white_cond2').addClass('active');

    // }

    // else if (models == "Модель: <br> ASW-H07A4/FJ-BR1") {
    //   $('#grey_cond2').removeClass('active');
    //   $('#white_cond2').removeClass('active');
    //  $('#black_cond2').addClass('active');

    // }



    // else if (models == "Модель: <br> ASW-H07A4/FJ-SR1") {
    //   $('#black_cond').removeClass('active');
    //   $('#white_cond').removeClass('active');
    //  $('#grey_cond').addClass('active');
    // }
});

