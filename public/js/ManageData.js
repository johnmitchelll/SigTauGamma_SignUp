async function sendData(data){

	let options = {
		method: "POST",

		headers: {
			"Content-Type": "application/json"
		},

		body: JSON.stringify(data)
	};

	let response = await fetch("/api", options);

	return await response.json();
}

async function sendDataToSiteDB(data){

	let options = {
		method: "POST",

		headers: {
			"Content-Type": "application/json"
		},

		body: JSON.stringify(data)
	};

	let response = await fetch("/siteApi", options);

	return await response.json();
}

async function getData(typeOfData){

	let options = {
		method: "POST",

		headers: {
			"Content-Type": "application/json"
		},

		body: JSON.stringify({dataType:typeOfData})
	};

	let response = await fetch("/dbCall", options);
	return await response.json();	
}

async function deleteData(elemsToDelete){
	let options = {
		method: "POST",

		headers: {
			"Content-Type": "application/json"
		},

		body: JSON.stringify({elemsToDelete:elemsToDelete})
	};

	let response = await fetch("/delDB", options);
	return await response.json();	
}

async function deleteSiteData(elemsToDelete){
	let options = {
		method: "POST",

		headers: {
			"Content-Type": "application/json"
		},

		body: JSON.stringify({elemsToDelete:elemsToDelete})
	};

	let response = await fetch("/delSiteDB", options);
	return await response.json();	
}


// file has to be inform document.getElembyID("id").files;
async function sendFile(file){
	const formData = new FormData();

	formData.append(file.name, file)

	const response = await fetch("http://localhost:3000/upload", {
		method: "POST",
		body: formData
	});

	const json = await response.json();
}	


