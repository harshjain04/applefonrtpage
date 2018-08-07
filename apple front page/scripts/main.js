var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/apple-icon.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}
function setUserName() {
	var myName = prompt("Please enter your name");
	localStorage.setItem('name',myName);
	myHeading.textContent="You are cool"+myName;
	}
if(!localStorage.getItem(name)){
	setUserName();
	}else{
		var storedName = localStorage.getItem('name');
		myHeading.textContent="You are cool"+storedName;
	}
myButton.onclick = function(){
	setUserName();
	}