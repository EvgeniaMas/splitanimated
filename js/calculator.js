(function() {
  var questions = [{
    question: "Укажите площадь помещения, м²",
    answers: '<input id="square" onChange="get_square()" type=text maxlength=4 size=9 name="S" value="20" class="digit_int">',
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2,
    defaultChoice: 20
  }, {
    question: "Высота потолка, м ",
    answers: '<input onChange="get_height()" id="height" type=text maxlength=4 size=9 name="H"  value="2.75" class="digit_dec">',
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4,
    defaultChoice: 2.75
  }, {
    question: "Освещенность солнцем",
    answers: '<select id="light" onChange="get_light()" name="lights" ><option value="30">Слабая</option><option value="35" selected >Средняя</option><option value="40">Сильная</option></select>',
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0,
    defaultChoice: 1
  }, {
    question: "Количество людей",
    answers:'<select id="people" onChange="get_people()" name="people"><option value="0" >0&nbsp;&nbsp;<option value="1" selected>1&nbsp;&nbsp;<option value="2">2&nbsp;&nbsp;<option value="3">3&nbsp;&nbsp;<option value="4">4&nbsp;&nbsp</select>',
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3,
    defaultChoice: 1
  }, {
    question: "Количество компьютеров ",
    choices: [20, 30, 40, 50, 64],
    answers:'<select  id="comp" onChange="get_comp()" name="comp"><option value="0">0&nbsp;&nbsp;<option value="1" selected>1&nbsp;&nbsp;<option value="2">2&nbsp;&nbsp;<option value="3">3&nbsp;&nbsp;<option value="4">4&nbsp;&nbsp;</select>',
    correctAnswer: 4,
    defaultChoice: 1
}, {
    question: "Количество телевизоров",
    answers: '<select id="tv" onChange="get_tv()" name="tv"><option value="0" selected>0&nbsp;&nbsp;<option value="1">1&nbsp;&nbsp;<option value="2">2&nbsp;&nbsp;</select>',
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4,
    defaultChoice: 1
}, {
    question: "Учитывать вентиляцию",
    answers: '<input id="vent" type="checkbox" name="vent" onClick="chk_sw()">',
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4,
    defaultChoice: 1
}, {
    question: "Верхний этаж",
    choices: [20, 30, 40, 50, 64],
    answers:'<input id="floor" type="checkbox" name="floor" onClick="chk_sw()">',
    correctAnswer: 4,
    defaultChoice: 1
}, {
    question: "Большое окно",
    answers: '<input id="windows" type="checkbox" name="window" onClick="chk_sw()">',
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4,
    defaultChoice: 1
  }];


  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); 
  //Quiz div object
  
  // Display initial question
  displayNext();
  



  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    calcCondPower();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();

    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      // console.log(questions[questionCounter].defaultChoice);
      questionCounter++;
      displayNext();
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });


  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    var q="0";
    sessionStorage.clear();
    console.log(sessionStorage);
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  // $('.button').on('mouseenter', function () {
  //   $(this).addClass('active');
  // });
  // $('.button').on('mouseleave', function () {
  //   $(this).removeClass('active');
  // });


  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });    
    var header = $('<h2>Вопрос ' + (index + 1) + ':</h2>');
    qElement.append(header);    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);    
    var radioButtons = createRadios(index);
    qElement.append(questions[index].answers);    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          // $('#prev').show();
        } else if(questionCounter === 0){
          
          // $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        // $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('Заказать кондиционер!');
    return score;
  }
})();

function get_square() {
var user_square = $('#square').val();
sessionStorage.setItem('SQUARE', JSON.stringify(user_square));
}


function get_height(){
var user_height = $('#height').val();  
sessionStorage.setItem('HEIGHT', JSON.stringify(user_height));
}

function get_light(){
var user_light = $('select[name="lights"]').val();
    sessionStorage.setItem('LIGHT', JSON.stringify(user_light));
   console.log(user_light);	
}


function get_tv(){
var user_tv = $('select[name="tv"]').val();
    sessionStorage.setItem('TV', JSON.stringify(user_tv));
  
}

function get_comp(){
var user_comp = $('select[name="comp"]').val();
   sessionStorage.setItem('COMP', JSON.stringify(user_comp));
}

function get_people(){
var user_people = $('select[name="people"]').val();
    sessionStorage.setItem('PEOPLE', JSON.stringify(user_people));   
}

function chk_sw() {
if($("#vent").is(":checked")) {  
    console.log("Checked");
    sessionStorage.setItem('VENT', JSON.stringify('2'));
} 

else if($("#window").is(":checked")) {  
    console.log("Checkedwin");
    sessionStorage.setItem('WINDOW', JSON.stringify('4'));
}

else if($("#floor").is(":checked")) {  
    console.log("Checkedfloor");
    sessionStorage.setItem('FLOOR', JSON.stringify('10'));
}
else if($("#windows").is(":checked")) {  
    console.log("Checkedfloor");
    sessionStorage.setItem('WINDOWS', JSON.stringify('100'));
}		
}


function calcCondPower() {
var square = JSON.parse(sessionStorage.getItem('SQUARE'));
if (!square) {
square =20;
}
console.log(square);
var height = JSON.parse(sessionStorage.getItem('HEIGHT'));
if (!height) {
height =2.75;
}
console.log(height);
var light = JSON.parse(sessionStorage.getItem('LIGHT'));
if (!light) {
light =35;
}
console.log(light);
var tv = JSON.parse(sessionStorage.getItem('TV'));
if (!tv) {
tv =1;
}
console.log("tv " +tv);
var comp= JSON.parse(sessionStorage.getItem('COMP'));
if (!comp) {
comp =1;
}
console.log("comp " +comp);
var people = JSON.parse(sessionStorage.getItem('PEOPLE'));
if (!people) {
people =1;
}
console.log(people);
var vent = JSON.parse(sessionStorage.getItem('VENT'));
if (!vent) {
vent =1;
}
console.log("vent " + vent);
var floor = JSON.parse(sessionStorage.getItem('FLOOR'));
if (!floor) {
floor =1;
}
console.log("floor " + floor);
var windows = JSON.parse(sessionStorage.getItem('WINDOWS'));
if (!windows) {
windows =1;
}
console.log("windows " + windows);
var q1 = (light / 1000) * square * height;
var q2 = people * 0.1;


var q3 = comp * 0.3 + tv * 0.2;
var q=(q1 + q2+ q3)* vent * floor * windows;
console.log(q);
$('#result').html(q);
}



$('#start').on('click', function (e) {
sessionStorage.clear();
 });


// function calcCondPower() {
//     c = document.forms['FormCond'].elements;
//     Lv_const = 0.0075;
//     S = toNum(c['S'].value);
//     H = toNum(c['H'].value);
//     G = toNum(c['G'].options[c['G'].options.selectedIndex].value);
//     Comp = toNum(c['comp'].options[c['comp'].options.selectedIndex].value);
//     TV = toNum(c['tv'].options[c['tv'].options.selectedIndex].value);
//     P = toNum(c['P'].options[c['P'].options.selectedIndex].value);
//     pwr_dif = toNum(c['pwr_dif'].value);
//     Kv = toNum(c['Kv'].value);
//     Sw = toNum(c['s_win'].value);
//     Q1 = (G / 1000) * S * H
//     Q2 = P * 0.1
//     Q3 = Comp * 0.3 + TV * 0.2 + pwr_dif * 0.3
//     if (c.c1.checked)
//         Kv_Sel = Kv;
//     else
//         Kv_Sel = 0;
//     Pvent = Kv_Sel * S * H * Lv_const;
//     if (c.c_sw.checked && Sw > 2) {
//         if (G < 32)
//             Q_win = (Sw - 2) * 0.075;
//         if (G > 32 && G < 37)
//             Q_win = (Sw - 2) * 0.15;
//         if (G > 38)
//             Q_win = (Sw - 2) * 0.25;
//     } else
//         Q_win = 0;
//     if (c.c_hg.checked)
//         Q_hg = Q1 * 0.15;
//     else
//         Q_hg = 0;
//     if (c.c_cool.checked)
//         Q_cool = (Q1 + Q_hg) * 0.2;
//     else
//         Q_cool = 0;
//     Qext = Pvent + Q_win + Q_cool + Q_hg
//     pwr_cond = Math.round((Q1 + Q2 + Q3 + Qext) * 100) / 100;
//     c['Q'].value = pwr_cond;
//     Qrel = Math.round(Qext / Q1 * 100);
//     OutCond(Qrel);
// }
