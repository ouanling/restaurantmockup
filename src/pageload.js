function openPagez(evt, pageName) {
    var i, x, lesliens;
    x = document.getElementsByClassName("pages");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    lesliens = document.getElementsByClassName("fas");
    for (i = 0; i < x.length; i++) {
      lesliens[i].className = lesliens[i].className.replace(" menuchosen", "");
    }
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " menuchosen";
  };
export {openPagez}