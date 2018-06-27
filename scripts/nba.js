
function showConf(){/*измение контента в зависимости от выбранной категории в НБА*/
  east = document.getElementById('east');
  west = document.getElementById('west');
  atl = document.getElementById('atl');
  ctr = document.getElementById('ctr');
  se = document.getElementById('south-east');
  nw = document.getElementById('north-west');
  pac = document.getElementById('pac');
  sw = document.getElementById('south-west');
  bd = document.getElementById('button_div');
  bc = document.getElementById('button_conf');
  east.style.visibility="visible";
  west.style.visibility="visible";
  bc.style.visibility="collapse";
  atl.style.visibility="collapse";
  ctr.style.visibility="collapse";
  se.style.visibility="collapse";
  nw.style.visibility="collapse";
  pac.style.visibility="collapse";
  sw.style.visibility="collapse";
  bd.style.visibility = "visible";


}
function showDiv(){/*измение контента в зависимости от выбранной категории в НБА*/
  east = document.getElementById('east');
  west = document.getElementById('west');
  atl = document.getElementById('atl');
  ctr = document.getElementById('ctr');
  se = document.getElementById('south-east');
  nw = document.getElementById('north-west');
  pac = document.getElementById('pac');
  sw = document.getElementById('south-west');
  bd = document.getElementById('button_div');
  bc = document.getElementById('button_conf');
  east.style.visibility="collapse";
  west.style.visibility="collapse";
    bc.style.visibility="visible";
  atl.style.visibility="visible";
  ctr.style.visibility="visible";
  se.style.visibility="visible";
  nw.style.visibility="visible";
  pac.style.visibility="visible";
  sw.style.visibility="visible";
  bd.style.visibility = "collapse";
}
