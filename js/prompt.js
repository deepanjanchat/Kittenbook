/*
Greet and ask the user to provide a valid name
@method
@param
@return string
*/
function getUserName(){
	var userName = prompt('Hello! What\'s your name?');
	while(!userName){
		userName = prompt('Please enter your name to proceed.');
	}
	var validUserName = /[a-zA-Z ]{2,20}/; //accept only alphabets or space, min 2 and max 20 characters
	while(!validUserName.test(userName)){
		userName = prompt('Please enter a valid name to proceed.');
	}
	return userName;
}
/*
Greet the user by name and ask for a valid phone number
@method
@param {string} userName The name of the user whose phone number is being asked for
@return string
*/
function getPhoneNumber(userName){
	var phoneNumber = prompt('Hello ' + userName +'!' + ' What\'s your phone number?');
	while(!phoneNumber){
		phoneNumber = prompt('Please enter your phone number to proceed.');
	}
	var validPhoneNumber = /(?:1\-|\+1\-|\()?(\d{3})\)?\-?\d{3}\-\d{4}/; //supported formats are +1-XXX-XXX-XXXX, 1-XXX-XXX-XXXX, (XXX)XXX-XXXX
	while(!validPhoneNumber.test(phoneNumber)){
		phoneNumber = prompt('Please enter a valid phone number to proceed.');
	}
	return phoneNumber;
}
/*
Identify the location from the entered phone number
@method
@param {string} phoneNumber The phone number that was entered by the user
@return string
*/
function getLocation(phoneNumber){
	var phoneNumberPattern = /(?:1\-|\+1\-|\()?(\d{3})\)?\-?\d{3}\-\d{4}/;
	var phoneMatches = phoneNumberPattern.exec(phoneNumber);
	var areaCode, areaCodes, locationName;
	if(phoneMatches){
		areaCode = phoneMatches[1];
		areaCodes = getAreaCodes();
		locationName = areaCodes[areaCode];
	}
	return locationName ? locationName: 'somewhere';
}