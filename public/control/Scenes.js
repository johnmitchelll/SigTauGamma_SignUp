function handleScenes(){
	if(scene == 0 && prevScene != scene){
		document.getElementById("body").style.display = "none";
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

async function submitContent(){
	let files = document.getElementsByClassName("myFiles");
	let video = document.getElementById("video");
	let sumbitResult = document.getElementById("sumbitResult");
	let primary = document.getElementById("primary");
	let secondary = document.getElementById("secondary");
	let background = document.getElementById("background");
	let siteDB = await getData("site");
	let myNewFile;

	for (var i = 0; i < files.length; i++) {

		if(files[i].files[0]){

			myNewFile = new File([files[i].files[0]], files[i].id + '.png', {type: files[i].files[0].type});
			sendFile(myNewFile);
		}
	}

	if(video.files[0]){
		myNewFile = new File([video.files[0]], video.id + '.mp4', {type: video.files[0].type});
		sendFile(myNewFile);
	}

	for (var i = 0; i < siteDB.length; i++) {
		if(siteDB[i].username){
			removeFromArray(siteDB, i);
		}
	}

	deleteSiteData(siteDB);

	sendDataToSiteDB({primaryColor:primary.value});
	sendDataToSiteDB({secondaryColor:secondary.value});
	sendDataToSiteDB({background:background.value});

	sumbitResult.textContent = "Content Uploaded Successfully"
	sumbitResult.style.display = "inline";
	setTimeout("hideLabel()", 3000);
}

function hideLabel(){
	document.getElementById("sumbitResult").style.display = "none";
}





