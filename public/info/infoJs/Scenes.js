function handleScenes(){
	if(scene == 0 && prevScene != scene){
		document.getElementById("body").style.display = "none";
		document.getElementById("confirmation").style.display = "none";
		prevScene = scene;
	}else if(scene == 1 && prevScene != scene){
		document.getElementById("body").style.display = "flex";
		document.getElementById("login").style.display = "none";
		prevScene = scene;
	}
}

async function checkUsernamePasswordCombo(){
	let siteDBInfo = await getData("site");

	let username = document.getElementById("formUsername").value;
	let password = document.getElementById("formPassword").value;

	for (var i = 0; i < siteDBInfo.length; i++) {

		// this means we found the usr/pass combo
		if(siteDBInfo[i].username){
			if(siteDBInfo[i].username == username && siteDBInfo[i].password == password){


				InitHTML();
				scene = 1;
				return true;
			}

			document.getElementById("signInStatus").textContent = "Incorrect Try Again";
			return false;
		}
	}

	document.getElementById("signInStatus").textContent = "No username Password Combo Detected";
	return false;
}

function deleteSelected(){
	let elemsToDel = [];

	for (var i = 0; i < pnmDBInfo.length; i++) {
		if(document.getElementById("cb"+pnmDBInfo[i].index).checked){
			elemsToDel.push(pnmDBInfo[i]);
		}
	}

	deleteData(elemsToDel);
	let textEntries = document.getElementById("textEntries");

	for (var i = 0; i < elemsToDel.length; i++) {
		document.getElementById("entry"+elemsToDel[i].index).style.display = "none";
		textEntries.removeChild(document.getElementById("entry"+elemsToDel[i].index));

		// gets pos of object with its index attribute set to the elems index
		var pos = pnmDBInfo.findIndex(j => j.index === elemsToDel[i].index);
		removeFromArray(pnmDBInfo,pos)
	}

	endConfirmation();
}

function clearDB(){
	deleteData(pnmDBInfo);

	for (var i = 0; i < pnmDBInfo.length; i++) {
		document.getElementById("entry"+pnmDBInfo[i].index).style.display = "none";
		textEntries.removeChild(document.getElementById("entry"+i));
	}

	pnmDBInfo = [];
	endConfirmation();
}

function endConfirmation(){
	document.getElementById("confirmation").style.display = "none";
}

function beginConfirmation(onPressFunc){
	InitConfirmation();
	document.getElementById("confirmation").style.display = "flex";
	document.getElementById("continue").setAttribute('onclick', "setOnClickFunc("+onPressFunc+")");
}

function setOnClickFunc(onPressFunc){
	eval(onPressFunc);
}

function getDownloadFile(){
	let infoString = "";

	console.log(pnmDBInfo)

	for (var i = 0; i < pnmDBInfo.length; i++) {
		infoString += "Name: " + pnmDBInfo[i].Name + "\n";
		infoString += "Email: " + pnmDBInfo[i].Email + "\n";
		infoString += "Insta: " + pnmDBInfo[i].Insta + "\n";
		infoString += "Phone #: " + pnmDBInfo[i].Number + "\n";
		infoString += "GPA: " + pnmDBInfo[i].GPA + "\n";
		infoString += "\n";
	}

	download_file("../downloadable.txt", infoString);
}

function download_file(name, contents, mime_type) {
        mime_type = mime_type || "text/plain";

        var blob = new Blob([contents], {type: mime_type});

        var dlink = document.createElement('a');
        document.body.appendChild(dlink)
        dlink.download = name;
        dlink.href = window.URL.createObjectURL(blob);
        dlink.onclick = function(e) {
            // revokeObjectURL needs a delay to work properly
            var that = this;
            setTimeout(function() {
                window.URL.revokeObjectURL(that.href);
            }, 1500);
        };

        dlink.click();
        dlink.remove();
        document.body.removeChild(dlink)
    }
