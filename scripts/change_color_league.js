
function changeColor(){ /*изменение дизайна по клику*/
    element_h = document.getElementById('any_logo');
    element_f = document.getElementById('logo_f');
    element_p = document.getElementById('logo_palette');
    var tables = document.getElementsByClassName('color_table');
    var topics = document.getElementsByClassName('topic');
    var buttons = document.getElementsByClassName('buttons');

    if (element_h.src.match("logo_gr")){
        element_h.src="../images/logos/logo_y.png";
        document.body.style.background = "#FFCC66";
        element_f.src="../images/logos/logo_f_y.png";
        element_p.src="../images/logos/logo_palette_y.png";
        for(i=0;i<tables.length;i++){
          tables[i].style.background="#FFFF99";
        }
        for(i=0;i<topics.length;i++){
          topics[i].style.border="5px ridge #FFFF33";
        }
        for(i=0;i<buttons.length;i++){
          buttons[i].style.border="5px ridge #FFFF33";
        }
      }
    else {
      if (element_h.src.match("logo_r")) {
        element_h.src="../images/logos/logo_gr.png";
        document.body.style.background = "#99CC66";
        element_f.src="../images/logos/logo_f_gr.png";
        element_p.src="../images/logos/logo_palette_gr.png";
        for(i=0;i<tables.length;i++){
          tables[i].style.background="#999933";
        }
        for(i=0;i<topics.length;i++){
          topics[i].style.border="5px ridge #006633";
        }
        for(i=0;i<buttons.length;i++){
          buttons[i].style.border="5px ridge #006633";
        }
      }
      else {
        element_h.src="../images/logos/logo_r.png";
        document.body.style.background = "#CC9966";
        element_f.src="../images/logos/logo_f_r.png";
        element_p.src="../images/logos/logo_palette_r.png";
        for(i=0;i<tables.length;i++){
          tables[i].style.background="#CC9999";
        }
        for(i=0;i<topics.length;i++){
          topics[i].style.border=" 5px ridge #CC0000";
        }
        for(i=0;i<buttons.length;i++){
          buttons[i].style.border="5px ridge #CC0000";
        }
      }
    }
  }
