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