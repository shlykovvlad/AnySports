function changeColor(){ /*изменение дизайна по клику*/
    element_h = document.getElementById('any_logo');
    element_f = document.getElementById('logo_f');
    element_p = document.getElementById('logo_palette');
    data_form = document.getElementById('data_form');
    sub = document.getElementById('submit');

    if (element_h.src.match("logo_gr")){
        element_h.src="images/logos/logo_y.png";
        document.body.style.background = "#FFCC66";
        data_form.style.background = "#FFFF99";
        element_f.src="images/logos/logo_f_y.png";
        element_p.src="images/logos/logo_palette_y.png";
        sub.style.border = "3px ridge #FFFF33";
      }
    else {
      if (element_h.src.match("logo_r")) {
        element_h.src="images/logos/logo_gr.png";
        document.body.style.background = "#99CC66";
        data_form.style.background = "#999933";
        element_f.src="images/logos/logo_f_gr.png";
        element_p.src="images/logos/logo_palette_gr.png";
        sub.style.border = "3px ridge #006633";
      }
      else {
        element_h.src="images/logos/logo_r.png";
        document.body.style.background = "#CC9966";
        data_form.style.background = "#CC9999";
        element_f.src="images/logos/logo_f_r.png";
        element_p.src="images/logos/logo_palette_r.png";
        sub.style.border = "3px ridge #CC0000";
      }
    }
  }
