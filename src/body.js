function createBody() {
 window.pagebody = document.getElementById('content');
const bg = document.createElement("div");
window.pagebox = document.createElement("div");
window.pagetext = document.createElement("div");
window.pagelogo = document.createElement("div");
window.pagemenu = document.createElement("div");
window.pagecontact = document.createElement("div");
bg.className = "bg";
pagebody.appendChild(bg);
pagebox.className = "pagebox";
bg.appendChild(pagebox);
pagetext.className = "pagetext"
pagebox.appendChild(pagetext);
pagelogo.id = "home";
pagelogo.innerHTML = "Food Times, street food free of salmonela.";
pagelogo.className = "pagelogo pages";
pagebox.appendChild(pagelogo);
pagemenu.id = "menu";
pagemenu.innerHTML = "Le menu";
pagemenu.className = "pagemenu pages";
pagemenu.style = "display: none"
pagebox.appendChild(pagemenu);
pagecontact.id = "contact";
pagecontact.innerHTML = "contact";
pagecontact.className = "pagecontact pages";
pagecontact.style = "display: none";
pagebox.appendChild(pagecontact);

};

export {createBody}


