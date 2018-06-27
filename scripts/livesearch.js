window.onload = initAll;
var xhr = false;
var logsArray = new Array();

function initAll() {
	document.getElementById("username").onkeyup = searchSuggest;

	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
	else {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) { }
		}
	}

	if (xhr) {
		xhr.onreadystatechange = setLogsArray;
		xhr.open("GET", "logs.xml", true);
		xhr.send(null);
	}
	else {
		alert("Проблема при создании XMLHttp запроса");
	}
}

function setLogsArray() {
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			if (xhr.responseXML) {
				var allLogs = xhr.responseXML.getElementsByTagName("login");
				for (var i=0; i<allLogs.length; i++) {
					logsArray[i] = allLogs[i].getElementsByTagName("name")[0].firstChild;
				}
			}
		}
		else {
			alert("Ошибка в запросе, статус " + xhr.status);
		}
	}
}

function searchSuggest() {
	var str = document.getElementById("username").value;
	document.getElementById("username").className = "";
	if (str != "") {
		document.getElementById("popups").innerHTML = "";

		for (var i=0; i<logsArray.length; i++) {
			var thisLog = logsArray[i].nodeValue;

			if (thisLog.toLowerCase().indexOf(str.toLowerCase()) == 0) {
				var tempDiv = document.createElement("div");
				tempDiv.innerHTML = thisLog;
				tempDiv.onclick = makeChoice;
				tempDiv.className = "suggestions";
				document.getElementById("popups").appendChild(tempDiv);
			}
		}
		var foundCt = document.getElementById("popups").childNodes.length;
		if (foundCt == 0) {
			document.getElementById("username").className = "error";
		}
		if (foundCt == 1) {
			document.getElementById("username").value = document.getElementById("popups").firstChild.innerHTML;
			document.getElementById("popups").innerHTML = "";
		}
	}
}

function makeChoice(evt) {
	var thisDiv = (evt) ? evt.target : window.event.srcElement;
	document.getElementById("username").value = thisDiv.innerHTML;
	document.getElementById("popups").innerHTML = "";
}
