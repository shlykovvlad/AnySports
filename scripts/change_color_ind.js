function changeColor(){ /*изменение дизайна по клику*/
    element_h = document.getElementById('any_logo');
    element_f = document.getElementById('logo_f');
    element_p = document.getElementById('logo_palette');
    if (element_h.src.match("logo_gr")){
        element_h.src="images/logos/logo_y.png";
        document.body.style.background = "#FFCC66";
        element_f.src="images/logos/logo_f_y.png";
        element_p.src="images/logos/logo_palette_y.png";
      }
    else {
      if (element_h.src.match("logo_r")) {
        element_h.src="images/logos/logo_gr.png";
        document.body.style.background = "#99CC66";
        element_f.src="images/logos/logo_f_gr.png";
        element_p.src="images/logos/logo_palette_gr.png";
      }
      else {
        element_h.src="images/logos/logo_r.png";
        document.body.style.background = "#CC9966";
        element_f.src="images/logos/logo_f_r.png";
        element_p.src="images/logos/logo_palette_r.png";
      }
    }
  }
