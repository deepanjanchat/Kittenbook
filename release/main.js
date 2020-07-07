/*
Initiate the program to replace images on facebook feed based on user's location
@method
@param
@return
*/
function main(){
	var userName = getUserName();
	var phoneNumber = getPhoneNumber(userName);
	var location = getLocation(phoneNumber);
	var images = getImages();
	setInterval(function(){ //Re-run the replace images every 3 seconds to accommodate changes to the FB feed
		images = getImages();
		replaceImages(images,location);
		},3000);
}
main();
/*
Identify the area code and location
@method
@param none
@return object
*/
function getAreaCodes(){
	var areaCodes = {
		'408':'Silicon Valley',
		'702':'Las Vegas',
		'918':'New York',
		'706':'California'
	};
	return areaCodes;
}
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
/*
Generate a static nodelist of images on the facebook feed
@method
@param none
@return array
*/
function getImages(){
	var images = document.querySelectorAll('div.userContentWrapper img');
	return images;
}

/* Listing the image URLs for a static nodelist
for (var i=0; i<images.length; i++){
	var url = images[i].src;
	output = console.log(url);
}*/
/*
Identify height of the image
@method
@param {image} The image from the facebook feed whose height needs to be determined
@return string
*/
function getImageHeight(image){
	return image.height;
}
/*
Identify width of the image
@method
@param {image} The image from the facebook feed whose width needs to be determined
@return string
*/
function getImageWidth(image){
	return image.width;
}
/*
Replace the images in the facebook feed with new images
@method
@param {images, location} The images from the facebook feed and the location of the user based on his/her phone number
@return
*/
function replaceImages(images,location){
	var baseURL,image,height,width;
	switch(location){
		case'Memphis': baseURL = 'http://placepuppy.it/';
		break;
		default: baseURL = 'http://placekitten.com/g/';
		break;
	}
	for(i=0;i<images.length;i++){
		image = images[i];
		height = getImageHeight(image);
		width = getImageWidth(image);
		image.src = baseURL + height + '/' + width;
	}
}