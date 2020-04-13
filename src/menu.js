function createMenu(openPage) {
    const menucontainer = document.createElement("div");
  
    const menuhome = document.createElement("i");
    const menumenu = document.createElement("i");
    const menucontact = document.createElement("i");
    menuhome.className = "fas fa-home fa-3x";
    menuhome.onclick = openPage(menuhome, 'home');
    menumenu.className = "fas fa-utensils fa-3x"
    menumenu.onclick = openPage(menumenu, 'menu');
   
    menucontact.className = "fas fa-phone-square-alt fa-3x";
    menucontainer.className = "menucontainer";
    menucontact.onclick = openPage(menucontact, 'contact');
    
    window.pagebox.appendChild(menucontainer);
    menucontainer.appendChild(menuhome);
    menucontainer.appendChild(menumenu);
    menucontainer.appendChild(menucontact);
    
  
    
};
export {createMenu}