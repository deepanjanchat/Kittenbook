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