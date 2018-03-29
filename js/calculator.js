(function() {
  var questions = [{
    question: "Укажите площадь помещения, м²",
    answers: '<input type=text maxlength=4 size=9 name="S" value="20" class="digit_int"  onChange="calcCondPower()">',
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2,
    defaultChoice: 20
  }, {
    question: "Высота потолка, м ",
    answers: '<input type=text maxlength=4 size=9 name="H"  value="2.75" class="digit_dec"  onChange="calcCondPower()">',
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4,
    defaultChoice: 2.75
  }, {
    question: "Освещенность солнцем",
    answers: '<select  name="G" onChange="calcCondPower()"><option value="30">Слабая&nbsp;&nbsp;&nbsp;<option value="35" selected >Средняя&nbsp;&nbsp;<option value="40">Сильная&nbsp;&nbsp;</select>',
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0,
    defaultChoice: 1
  }, {
    question: "Количество людей",
    answers:'<select  name="P" onChange="calcCondPower()"><option value="0" >0&nbsp;&nbsp;<option value="1" selected>1&nbsp;&nbsp;<option value="2">2&nbsp;&nbsp;<option value="3">3&nbsp;&nbsp;<option value="4">4&nbsp;&nbsp</select>',
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3,
    defaultChoice: 1
  }, {
    question: "Количество компьютеров ",
    choices: [20, 30, 40, 50, 64],
    answers:'<select  name="comp" onChange="calcCondPower()"><option value="0">0&nbsp;&nbsp;<option value="1" selected>1&nbsp;&nbsp;<option value="2">2&nbsp;&nbsp;<option value="3">3&nbsp;&nbsp;<option value="4">4&nbsp;&nbsp;</select>',
    correctAnswer: 4,
    defaultChoice: 1
}, {
    question: "Количество телевизоров",
    answers: '<select  name="tv" onChange="calcCondPower()"><option value="0" selected>0&nbsp;&nbsp;<option value="1">1&nbsp;&nbsp;<option value="2">2&nbsp;&nbsp;</select>',
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4,
    defaultChoice: 1
}, {
    question: "Учитывать вентиляцию",
    answers: '<input type="checkbox" name="c1" onClick="chk1()">',
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4,
    defaultChoice: 1
}, {
    question: "Верхний этаж",
    choices: [20, 30, 40, 50, 64],
    answers:'<input type="checkbox" name="c_hg" onClick="calcCondPower()">',
    correctAnswer: 4,
    defaultChoice: 1
}, {
    question: "Большое окно",
    answers: '<input type="checkbox" name="c_sw" onClick="chk_sw()">',
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
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      console.log(questions[questionCounter].defaultChoice);
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
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
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
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
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



jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '; path=/',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

$(function () {

   // Set wrap/unwrap blocks
   
   $('.wrap-blk').each(function () {
      var block = $(this);
      var blockID = $(this).attr('id');
      var hdr = $(this).prev('.wrap-hdr');

      if ($.cookie(blockID)) {
         $(this).addClass('wrap-blk-close');
         hdr.addClass('wrap-hdr-close');
      }

      hdr.click(function() {
         block.toggleClass('wrap-blk-close');
         $(this).toggleClass('wrap-hdr-close');

         if (block.hasClass('wrap-blk-close'))
            $.cookie(blockID, "1", { expires: 365 });
         else
            $.cookie(blockID, null);
      });
   });

   // Set onChange Event
   $('#Calc').each(function () {   
      $(this).change(function() {
         calcVent();
      });   
   });
   
   // Initial 2 rooms
   $('#calc-L1-2 div.calc-group-brd').each(function () {
                  
      if ($(this).index('div.calc-group-brd') > 1) 
         $(this).css('display','none');
      else 
         $(this).css('display','block');               

   });   

   // Change room number
   $('#set-room-number input').each(function () {
      $(this).click(function() {
         var room_number = $(this).val();
                    
         $('#calc-L1-2 div.calc-group-brd').each(function () {

            if ($(this).index('div.calc-group-brd')+1 > room_number) 
               $(this).css('display','none');
            else 
               $(this).css('display','block');               
      
         });
      });
   });   
});


var MaxPwr=20,kSEER=0.8,CurEl=[0,6,10,16,20,25,32,40,50,63],Cabel=[0,0.75,1.5,2.5,4],kWeather=[100,80,50,30],kHrWork=[65,50,40,35],kMonth=[[40,65,100,75,25],[25,60,100,65,15],[10,55,100,58,5],[0,45,100,41,0]];

function chk_all(){chk1();chk_sw()}function toNum(a){str=new String(a);return 0<str.indexOf(",")?(new_str=str.split(","),res_str=new_str[0]+"."+new_str[1]):a}function LimitNum(a,b,d,e){a>d&&(a=d,c[b].value=a);a<e&&(a=e,c[b].value=a);return a}
function chk1(){c=document.forms.FormCond.elements;c.c1.checked?(c.Kv.disabled=0,document.getElementById("Sel_Text_vent").style.color="#555555"):(c.Kv.disabled=1,document.getElementById("Sel_Text_vent").style.color="#A9A9A9");calcCondPower()}function chk_sw(){c=document.forms.FormCond.elements;c.c_sw.checked?(c.s_win.disabled=0,document.getElementById("Sel_Text_sw").style.color="#555555"):(c.s_win.disabled=1,document.getElementById("Sel_Text_sw").style.color="#A9A9A9");calcCondPower()}
function calcCondPower()


{
  console.log('KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK');
var c=document.forms.FormCond.elements;

var Lv_const=0.0075;
var a=window;
var S=toNum(c.S.value);
console.log(S);
var S=LimitNum(S,"S",2E3,5);
var H=toNum(c.H.value);H=LimitNum(H,"H",5,1.5);
var G=toNum(c.G.options[c.G.options.selectedIndex].value);
var Comp=toNum(c.comp.options[c.comp.options.selectedIndex].value);
var TV=toNum(c.tv.options[c.tv.options.selectedIndex].value);
var P=toNum(c.P.options[c.P.options.selectedIndex].value);
var pwr_dif=toNum(c.pwr_dif.value);
var pwr_dif=LimitNum(pwr_dif,"pwr_dif",20,0);
var Kv=toNum(c.Kv.value);Sw=toNum(c.s_win.value);
var Sw=LimitNum(Sw,"s_win",20,0);
var a=a.location.hostname;
var Q1=G/1E3*S*H;
console.log(Q1);
var Q2=0.1*P;
var Q3=0.3*Comp+0.2*TV+0.3*pwr_dif;
var b=4;
"www"!=a.substr(0,3)&&(b=0);a=a.substr(b,8);
"f"==a.charAt(1)&&("c"==a.charAt(2)&&"l"==a.charAt(3)&&"r"==a.charAt(0))&&(Kv_Sel=c.c1.checked?Kv:0,Pvent=Kv_Sel*S*H*Lv_const,c.c_sw.checked&&2<Sw?(32>G&&(Q_win=0.075*(Sw-2)),32<G&&37>G&&(Q_win=0.15*(Sw-2)),38<G&&(Q_win=0.25*(Sw-2))):Q_win=0,Q_hg=c.c_hg.checked?0.15*Q1:0,Q_cool=c.c_cool.checked?0.2*(Q1+Q_hg):0,Qext=Pvent+Q_win+Q_cool+Q_hg,pwr_cond_base=
Q1+Q2+Q3,pwr_cond=pwr_cond_base+Qext,k_round=10>pwr_cond?100:100>pwr_cond?10:1,
pwr_cond=Math.round((pwr_cond_base+Qext)*k_round)/k_round,Qrel=Math.round(100*(Qext/Q1)),c.Q.value=pwr_cond,calcAirgy(),OutCond(Qrel))};

function calcAirgy(){
  if(pwr_cond<MaxPwr){
    var PriceDay=toNum(c.PriceDay.value);
    var PriceDay=LimitNum(PriceDay,"PriceDay",15,0.1);
    var k_EER=toNum(c.keer.value);
    var k_EER=LimitNum(k_EER,"keer",15,2);
        var PwrSup=pwr_cond/k_EER;
        var PwrSup_c=document.all.Pwr_Sup;
        // var PwrSup_c.innerHTML="<b>&nbsp;"+PwrSup.toFixed(1)+" кВт"; 
        var Curnt_c=document.all.Cur_Sup;
        var CurntText_c=document.all.Cur_Sup_Text;
        if(4>=PwrSup){Curnt=1E3*PwrSup/220;
          var a=3,
          d=12;
          CurntText_c.innerHTML="<b><nobr>Потребляемый ток (при 220В, 1 фаза):</nobr></b>"}
          else Curnt=1E3*PwrSup/660,a=5,d=10,CurntText_c.innerHTML="<b><nobr>Потребляемый ток (при 380В, 3 фазы):</nobr></b>";for(var e=1.3*Curnt,b=1;b<CurEl.length;b++)if(CurEl[b-1]<e&&CurEl[b]>e)var f=CurEl[b];for(b=1;b<Cabel.length;b++)if(Cabel[b-1]*d<f&&Cabel[b]*d>f)var g=Cabel[b];b=" (автомат на "+f+"А, кабель "+a+"x"+g+
"мм&sup2;)";Curnt_c.innerHTML="<b>&nbsp;"+Curnt.toFixed(1)+" А</b>" +b;a=0;d=[];e=toNum(c.Weather.options[c.Weather.options.selectedIndex].value);for(b=0;4>=b;b++)d[b]=720*(kSEER*PwrSup)*PriceDay*kWeather[e]/100*kHrWork[e]/100*kMonth[e][b]/100,CurSum=d[b],a+=CurSum,Mn_out=document.all["Mn"+(b+1)],Mn_out.innerHTML=""+10*(CurSum/10).toFixed(0)+"";Mn_out=document.all.MnS;Mn_out.innerHTML=10*(a/10).toFixed(0)+"&nbsp;руб."}else{PwrSup_c=document.all.Pwr_Sup;PwrSup_c.innerHTML=
"&nbsp;";
Curnt_c=document.all.Cur_Sup;
Curnt_c.innerHTML="&nbsp;";
for(b=0;4>=b;b++)Mn_out=document.all["Mn"+(b+1)],Mn_out.innerHTML="&nbsp;";
  Mn_out=document.all.MnS;
Mn_out.innerHTML="&nbsp;"}


};

function OutCond(Qrel)
{

  var c = document.forms['FormCond'].elements;
  SText = "";
  qq = document.all["Models"];
  
    if (pwr_cond < 10)
    {
      k_fix = 2;
    k_fxr = 1;
    }
    else if (pwr_cond < 100)
    {
      k_fix = 1;
    k_fxr = 1;
    }
    else 
    {
      k_fix = 0;  
    k_fxr = 0;
    }
  PwrMin = (pwr_cond*0.95).toFixed(k_fxr);
  PwrMax = (pwr_cond*1.15).toFixed(k_fxr);
  
  if ((c['Q'].value > 0.5) && (c['Q'].value <= 9.5))
    {
        if (c['Q'].value <=2.2) 
      { SPrice1 = "<nobr>14&nbsp;000&nbsp;— 25&nbsp;000 &nbsp;рублей</nobr>"
      SPrice2 = "<nobr>14&nbsp;000&nbsp;— 30&nbsp;000 &nbsp;рублей</nobr>"
      SPrice3 = "<nobr>28&nbsp;000&nbsp;— 50&nbsp;000 &nbsp;рублей</nobr>" }
    else
      if (c['Q'].value <=3.1) 
        { SPrice1 = "<nobr>15&nbsp;000&nbsp;— 30&nbsp;000 &nbsp;рублей</nobr>"
        SPrice2 = "<nobr>15&nbsp;000&nbsp;— 35&nbsp;000 &nbsp;рублей</nobr>"
        SPrice3 = "30&nbsp;000&nbsp;— 55&nbsp;000 &nbsp;рублей" }
      else
        if (c['Q'].value <=4.5) 
          { SPrice1 = "<nobr>20&nbsp;000&nbsp;— 35&nbsp;000 &nbsp;рублей</nobr>"
          SPrice2 = "<nobr>20&nbsp;000&nbsp;— 40&nbsp;000 &nbsp;рублей</nobr>"
          SPrice3 = "35&nbsp;000&nbsp;— 70&nbsp;000 &nbsp;рублей" }
        else  
          if (c['Q'].value <=6) 
            { SPrice1 = "<nobr>30&nbsp;000&nbsp;— 50&nbsp;000 &nbsp;рублей</nobr>"
            SPrice2 = "<nobr>30&nbsp;000&nbsp;— 70&nbsp;000 &nbsp;рублей</nobr>"
            SPrice3 = "45&nbsp;000&nbsp;— 100&nbsp;000 &nbsp;рублей" }
          else
            if (c['Q'].value <=9.5) 
              { SPrice1 = "<nobr>40&nbsp;000&nbsp;— 75&nbsp;000 &nbsp;рублей</nobr>"
              SPrice2 = "<nobr>40&nbsp;000&nbsp;— 100&nbsp;000 &nbsp;рублей</nobr>"
              SPrice3 = "<nobr>80&nbsp;000&nbsp;— 170&nbsp;000 &nbsp;рублей</nobr>" }
              
      SText = '<table width="100%" cellspacing="0" cellpadding="2" border="0"  id="tProdm">' + 
            '<tr class=phead><td align=center><b>Класс кондиционера</b></td>' + 
            '<td align=center><b>Производители</b></td>'+
            '<td align=center><b>Ориентировочная цена сплит-системы <br>мощностью <nobr>от ' + PwrMin + ' до ' + PwrMax + ' кВт</nobr></b></td></TR>'
      SText = SText + 
            '<tr ><TD >Премиум-класса</TD>' +  
            '<TD><nobr><A target=_blank href="daikin.htm">Daikin</A></nobr><br>'+
            '<nobr><A target=_blank href="mitsubishi_es.htm">Mitsubishi Electric</A></nobr><br>'  +
            '<nobr><A target=_blank href="mitsubishi.htm">Mitsubishi Heavy</A></nobr><br>'  +           
            '<A target=_blank href="fujitsu.htm">Fujitsu</A><br>'  +
                '<a target=_blank href="toshiba.htm">Toshiba </a><br>'  +
            '</TD>' +
            '<TD>' + SPrice3 + '</TD></TR>'   
      SText = SText + 
            '<tr ><TD >Средний класс</TD>' +  
            '<TD>'  +
            '<nobr><A target=_blank href="ballu.htm">Ballu</A></nobr><br>' +
            '<A target=_blank href="electrolux.htm">Electrolux</A><br>' +
            '<A target=_blank href="hyundai.htm">Hyundai</A><br>' +   
            '<A target=_blank href="kentatsu.htm">Kentatsu</A><br>' +
            '<A target=_blank href="midea.htm">Midea</A><br>' +
            '<A target=_blank href="mdv.htm">MDV</A><br>' +
            '<A target=_blank href="samsung.htm">Samsung</A><br>' +   
            '<a target=_blank href="shivaki.htm">Shivaki</A><br>' + 
            '<a target=_blank href="suzuki.htm">Suzuki</A><br>' +       
            '<A target=_blank href="zanussi.htm">Zanussi</A><br>' +                             
            '<TD>' + SPrice2 + '</TD></TR>'           
      SText = SText +  '</table>'
      SText = SText +  '<p>Для точного расчета мощности кондиционера и стоимости его монтажа вы можете <a href="firm_manag.htm">заполнить заявку</a> на выезд специалиста.'
      SText = '<h3 style="margin-top: 20px!important;">Ориентировочные цены на кондиционеры мощностью <nobr>от ' + PwrMin + ' до ' + PwrMax + ' кВт</nobr></h3>' + SText
  }
  qq.innerHTML = SText; 
  
  
  var pwr_out_c = document.all["Power_Out"];
  console.log(pwr_out_c ) ;
  pwr_out_c.innerHTML = pwr_cond.toFixed(k_fix) + ' кВт';
  //pwr_out_c = document.all["Pwr_Energo"]; 
  //pwr_out_c.innerHTML = 'При мощности охлаждения ' + pwr_cond.toFixed(k_fix) + ' кВт'; 
  
  var pwr_out_rng = document.all["Power_Out_Range"];
  var pwr_out_tr = document.all["Power_Out_TR"];
  if (pwr_cond<MaxPwr)
    {
      pwr_out_tr.innerHTML = '<b>Рекомендуемый диапазон  Q<sub>range</sub>:</b>';
      pwr_out_rng.innerHTML = PwrMin + ' &ndash; ' + PwrMax + ' кВт';
    }     
  else
    {
      pwr_out_tr.innerHTML = '<span style="color:#FF9B00; font-size:90%;">Калькулятор предназначен для расчета <br> мощности только бытовых кондиционеров</span>';
      pwr_out_rng.innerHTML = '&nbsp;';
    }     
  
  q_ext_nt = document.all["Q_Ext_Note"];
  if ((Qrel<=1) || (pwr_cond>=MaxPwr))
    q_ext_nt.innerHTML = '&nbsp;';
  else if (Qrel<14)
    q_ext_nt.innerHTML = '<b style="color:  #969696;">Мощность Q1 увеличилась на ' + Qrel + '%</b>';
  else
    q_ext_nt.innerHTML = '<b style="color:  #969696;">Мощность Q1 увеличилась на ' + Qrel + '%, <br>рекомендуем использовать <br> инверторный кондиционер</b>';   
} 