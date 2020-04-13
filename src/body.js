function createBody() {
const pagebody = document.getElementById('content');
const bg = document.createElement("div");
window.pagebox = document.createElement("div");
const pagetext = document.createElement("div");
const pagelogo = document.createElement("div");
const pagemenu = document.createElement("div");
const pagecontact = document.createElement("div");
const addfood = document.createElement("img");
const addfood2 = document.createElement("img");
const addfood3 = document.createElement("img");
const addfood4 = document.createElement("img");
bg.className = "bg";
pagebody.appendChild(bg);
window.pagebox.className = "pagebox";
bg.appendChild(pagebox);
pagetext.className = "pagetext"
window.pagebox.appendChild(pagetext);
pagelogo.id = "home";
pagelogo.innerHTML = "Food Times, street food free of salmonela.";
pagelogo.className = "pagelogo pages";
pagebox.appendChild(pagelogo);
pagemenu.id = "menu";
pagemenu.className = "pagemenu pages";
pagemenu.style = "display: none"
pagebox.appendChild(pagemenu);
addfood.src = "food1.jpg";
addfood.className = "food";
addfood2.src = "food2.jpeg";
addfood2.className = "food";
addfood3.src = "food3.jpeg";
addfood3.className = "food";
addfood4.src = "food4.jpg";
addfood4.className = "food";
pagemenu.appendChild(addfood);
pagemenu.appendChild(addfood2);
pagemenu.appendChild(addfood3);
pagemenu.appendChild(addfood4);
pagecontact.id = "contact";
pagecontact.innerHTML = "You may contact us by praying to your god, too bad if you're an atheist.";
pagecontact.className = "pagecontact pages";
pagecontact.style = "display: none";
pagebox.appendChild(pagecontact);

};


export {createBody}


