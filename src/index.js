import {createBody} from './body.js'
import {createMenu} from './menu.js'

function openPage(evtz, pageNamez) {
    return () => {
    var i, x, lesliens;
    x = document.getElementsByClassName("pages");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    lesliens = document.getElementsByClassName("fas");
    for (i = 0; i < x.length; i++) {
      lesliens[i].className = lesliens[i].className.replace(" menuchosen", "");
    }
    document.getElementById(pageNamez).style.display = "block";
    evtz.className += " menuchosen";
  };
}

createBody(openPage);
createMenu(openPage);




  
