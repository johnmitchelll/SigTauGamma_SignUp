
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

function InitBody(){
	let body = document.getElementById("body");

	body.style.display = "flex";
	body.style.flexDirection = "column";
}

async function InitBottom(){
	let logo = document.getElementById("logo");
	let controls = document.getElementById("controls");
	let fileInput = document.getElementsByClassName("fileInput");
	let fileLabel = document.getElementsByClassName("fileLabel");
	let colorInfo = document.getElementsByClassName("colorInfo");
	let submit = document.getElementById("submitContent");

	let primary = document.getElementById("primary");
	let secondary = document.getElementById("secondary");
	let background = document.getElementById("background");

	submit.style.width = "30%";
	submit.style.height = "40px";
	submit.style.alignSelf = "center";
	submit.style.marginTop = "4%";
	submit.style.border = "2px solid grey";
	submit.style.borderRadius = "5px";
	submit.style.color = RED;
	submit.style.fontSize = H3_FONTSIZE;

	submit.style.margin = "2%";
	
	for (var i = 0; i < colorInfo.length; i++) {
		colorInfo[i].style.display = "flex";
	}

	for (var i = 0; i < fileLabel.length; i++) {
		fileLabel[i].style.color = "white";
	}

	logo.style.marginTop = "4%";
	logo.style.textAlign = "center";

	controls.style.display = "flex";
	controls.style.flexDirection = "column";
	controls.style.justifyContent = "center";

	for (var i = 0; i < fileInput.length; i++) {
		fileInput[i].style.margin = "2%";
		fileInput[i].style.padding = "2%";
		fileInput[i].style.height = "40px";
		fileInput[i].style.border = "2px solid grey";
		fileInput[i].style.borderRadius = "5px";
		fileInput[i].style.color = RED;
		fileInput[i].style.fontSize = H3_FONTSIZE;
	}

	let siteDB = await getData("site");

	for (var i = 0; i < siteDB.length; i++) {
		if(siteDB[i].primaryColor){
			primary.value = siteDB[i].primaryColor;
		}
		if(siteDB[i].secondaryColor){
			secondary.value = siteDB[i].secondaryColor;
		}
		if(siteDB[i].background){
			background.value = siteDB[i].background;
		}
	}
}



/*
Completly center text:
	row.style.textAlign = "center";
	row.style.alignItems = "center";
	row.style.justifyContent = "center";
*/

