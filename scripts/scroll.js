
$(function() {
if(document.getElementById("fixed")!=null)
{
  var a,b;
  var title = document.title;
  switch (title) {
    case 'AnySports|Premier League':
      a=455;
      b=458;
      break;
    case 'AnySports|La Liga':
      a=395;
      b=397;
      break;
    case 'AnySports|Champions League':
      a=900;
      b=904;
      break;
    case 'AnySports|NBA':
      a=875;
      b=880;
      break;
    case 'AnySports|KHL':
      a=915;
      b=918;
      break;
    case 'AnySports|NHL':
      a=1310;
      b=1311;
      break;
    default:
      a=0;
      b=0;
  }
  /*var bord = $("#bord").offset();
  var bord1 = $("#bord1").offset();*/
  var offset = $("#fixed").offset();
  var topPadding = 5;
  /*alert(a);
  alert (b); роверка */
  $(window).scroll(function() {
    if ($(window).scrollTop() > a) {
        $("#fixed").stop().animate({marginTop:b });
    }
    else if ($(window).scrollTop() > offset.top+70) {
      $("#fixed").stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});

    }
    else {
      $("#fixed").stop().animate({marginTop: 0});};});

    }

});
