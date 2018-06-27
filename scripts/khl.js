
function showConf(){/*измение контента в зависимости от выбранной категории в НБА*/
  east = document.getElementById('east');
  west = document.getElementById('west');
  div1 = document.getElementById('div1');
  div2 = document.getElementById('div2');
  div3 = document.getElementById('div3');
  div4 = document.getElementById('div4');
  bd = document.getElementById('button_div');
  bc = document.getElementById('button_conf');

  east.style.visibility="visible";
  west.style.visibility="visible";
  bc.style.visibility="collapse";
  div1.style.visibility="collapse";
  div2.style.visibility="collapse";
  div3.style.visibility="collapse";
  div4.style.visibility="collapse";
  bd.style.visibility="visible";
}

function showDiv(){/*измение контента в зависимости от выбранной категории в НБА*/
  east = document.getElementById('east');
  west = document.getElementById('west');
  div1 = document.getElementById('div1');
  div2 = document.getElementById('div2');
  div3 = document.getElementById('div3');
  div4 = document.getElementById('div4');
  bd = document.getElementById('button_div');
  bc = document.getElementById('button_conf');

  east.style.visibility="collapse";
  west.style.visibility="collapse";
  bc.style.visibility="visible";
  div1.style.visibility="visible";
  div2.style.visibility="visible";
  div3.style.visibility="visible";
  div4.style.visibility="visible";
  bd.style.visibility="collapse";
}
