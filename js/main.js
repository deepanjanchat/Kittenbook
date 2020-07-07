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