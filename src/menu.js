function createMenu() {
    window.menucontainer = document.createElement("div");
    
     window.menuhome = document.createElement("i");
    window.menumenu = document.createElement("i");
    window.menucontact = document.createElement("i");
    menuhome.className = "fas fa-home fa-3x";
    menuhome.setAttribute("onclick", "openPage(event, 'home')");
    menumenu.className = "fas fa-utensils fa-3x"
    menumenu.setAttribute("onclick","openPage(event, 'menu')");
    menucontact.className = "fas fa-phone-square-alt fa-3x";
    menucontainer.className = "menucontainer";
    menucontainer.setAttribute("onclick", "openPage(event, 'contact')");
    pagebox.appendChild(menucontainer);
    menucontainer.appendChild(menuhome);
    menucontainer.appendChild(menumenu);
    menucontainer.appendChild(menucontact);

};
export {createMenu}