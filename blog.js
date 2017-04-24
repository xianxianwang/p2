function closex(){
	 document.body.style.background="white";
}
function Note(){
	var t = document.getElementById("tex").value;
	var li = document.createElement("li");
	var ul = document.getElementById("write");
	var note = document.createTextNode(t);
	li.appendChild(note);
	ul.appendChild(li);
}
