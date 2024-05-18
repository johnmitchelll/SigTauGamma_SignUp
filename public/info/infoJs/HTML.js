
function InitHTML(){
	InitBody();
	InitBottom();
}

function InitLogin(){
	let login = document.getElementById("login");
	let signIn = document.getElementById("signIn");
	let forms = document.getElementsByClassName("info");
	let submit = document.getElementById("submit");
	let signInStatus = document.getElementById("signInStatus");

	login.style.display = "flex";
	login.style.flexDirection = "column";
	login.style.width = "100vw";
	login.style.height = "100vh";
	login.style.justifyContent = "center";
	login.style.alignContent = "center";

	signIn.style.marginBottom = "2%";

	forms[0].style.width = "25%";
	forms[1].style.width = "25%";

	submit.style.width = "20%";
	submit.style.height = "40px";
	submit.style.alignSelf = "center";
	submit.style.marginTop = "2%";
	submit.style.border = "2px solid grey";
	submit.style.borderRadius = "5px";
	submit.style.color = RED;
	submit.style.fontSize = H3_FONTSIZE;

	signInStatus.style.marginTop = "2%";
}

function InitConfirmation(){
	let confirmation = document.getElementById("confirmation");
	let areYouSure = document.getElementById("areYouSure");
	let buttons = document.getElementsByClassName("buttons");
	let goBack = document.getElementById("goBack");
	let continueButton = document.getElementById("continue");

	confirmation.style.position = "absolute";
	confirmation.style.display = "flex";
	confirmation.style.flexDirection = "column";
	confirmation.style.alignContent = "center";
	confirmation.style.justifyContent = "center";
	confirmation.style.width = "33vw";
	confirmation.style.height = "33vh";
	confirmation.style.border = "2px solid white";
	confirmation.style.left = (window.innerWidth/2-confirmation.offsetWidth/2)+"px";
	confirmation.style.top = (window.innerHeight/2-confirmation.offsetHeight/2)+"px";
	confirmation.style.display = "none";

	areYouSure.style.marginBottom = "1%";

	goBack.style.width = "auto";
	continueButton.style.width = "auto";

	goBack.style.padding = "0px 10px 0px 10px";
	continueButton.style.padding = "0px 10px 0px 10px";
}


function InitBody(){
	let body = document.getElementById("body");

	body.style.display = "flex";
	body.style.flexDirection = "column";
}

async function InitBottom(){
	let logo = document.getElementById("logo");
	let textEntriesHTML = document.getElementById("textEntries");
	let controls = document.getElementById("controls");
	let buttons = document.getElementsByClassName("button");

	logo.style.marginTop = "4%";
	logo.style.textAlign = "center";

	textEntriesHTML.style.border = "2px soild white";
	textEntriesHTML.style.margin = "2%";

	pnmDBInfo = await getData("pnm");
	pnmDBInfo.sort(function(a, b){return b.TimeStamp - a.TimeStamp});

	for(var i = 0; i < pnmDBInfo.length; i++) {
		pnmDBInfo[i].index = i;
	}

	controls.style.display = "flex";
	controls.style.justifyContent = "center";

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.margin = "2%";
		buttons[i].style.height = "40px";
		buttons[i].style.border = "2px solid grey";
		buttons[i].style.borderRadius = "5px";
		buttons[i].style.color = RED;
		buttons[i].style.fontSize = H3_FONTSIZE;
		buttons[i].style.width = (buttons[i].offsetWidth+10)+"px";
	}

	if(pnmDBInfo.length == 0){
		let noEntries = document.createElement("h3");
		noEntries.className = "infoLabel";
		noEntries.textContent = "No Entries Yet..."
		noEntries.style.textAlign = "center";
		noEntries.style.marginTop = "2%"

		textEntriesHTML.append(noEntries);
	}

	for (var i = 0; i < pnmDBInfo.length; i++) {
		let entry = document.createElement("h3");
		entry.id = "entry" + i;
		entry.style.display = "flex";
		entry.style.flexDirection = "column";

		let entryItemsInfo = ["Name: " + pnmDBInfo[i].Name,
							  "GPA: " + pnmDBInfo[i].GPA, 
							  "Insta: " + pnmDBInfo[i].Insta,
							  "Email: " + pnmDBInfo[i].Email,
							  "Phone Number: " + pnmDBInfo[i].Number,
							  "Time Stamp: " + new Date(pnmDBInfo[i].TimeStamp).toLocaleString()];
		
		for (var j = 0; j < entryItemsInfo.length; j++) {
			let entryItem = document.createElement("div");
			entryItem.textContent = entryItemsInfo[j];
			entryItem.style.fontFamily = "serif";
			
			if(j == 0){
				let checkBox = document.createElement("Input");
				checkBox.id = "cb"+i;
				checkBox.type = "checkbox";
				checkBox.style.alignSelf = "flex-end";
				entry.append(checkBox);
			}

			entry.append(entryItem);
		}

		entry.style.color = "white";
		entry.style.padding = "1%";
		entry.style.border = "1px solid white";
		entry.style.margin = "6px";

		textEntriesHTML.append(entry);
	}
}



/*
Completly center text:
	row.style.textAlign = "center";
	row.style.alignItems = "center";
	row.style.justifyContent = "center";
*/



/*
what I am doing right now is valueable to
sig tau because they are going to have specialized access 
to their own personal servers made by someone in the frat 
and who will give personal free maintainence on the website
*/


