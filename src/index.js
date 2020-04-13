

import {createBody} from './body.js'
import {createMenu} from './menu.js'
var crotte = "crotterrr";
console.log(crotte);

createBody();
createMenu();
menuhome.setAttribute("onclick", "openPagez(event, 'home')");
menumenu.setAttribute("onclick","openPagez(event, 'menu')");
menucontainer.setAttribute("onclick", "openPagez(event, 'contact')");


function openPage(evtz, pageNamez) {
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
    evtz.currentTarget.className += " menuchosen";
  };

