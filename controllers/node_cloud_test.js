
// Imports the Google Cloud client libraries
const Storage = require('@google-cloud/storage');
const Vision = require('@google-cloud/vision');
const base64Img = require('base64-img');

// Instantiates clients
const storage = Storage();
const vision = Vision();

// Other stuff
const bucketName = 'facialanalysisbucket';
const uploadedFile = 'public/media/temp/image166.jpg';
const base64image = req.body.img;

exports.upload = function(req, res) {

	// Saves base64 as image.jpg into public/media/temp
	var filepath = base64Img.imgSync(base64image, 'public/media/temp/', 'image166');

  // Uploads a file to the bucket
  //  console.log(base64image)
  //  const newfileName = 'public/media/temp/image166.jpg';
  //  return storage.bucket(bucketName).upload(newfileName)
  //    .then((results) => {
  //      const file = results[0];
  //      console.log(`File ${file.name} uploaded.`);
  //      return file;
  //    });
  //  // [END storage_upload_file]
  //  var options = {
	//   entity: 'allUsers',
	//   role: gcs.acl.READER_ROLE
	// };

  // Performs face detection on the file
  vision.detectFaces(uploadedFile)
  .then((results) => {
    const faces = results[0];
    faces.forEach((face, i) => {
      console.log(`  Face #${i + 1}:`);
      console.log(`    Joy: ${face.joy}`);
      console.log(`    Anger: ${face.anger}`);
      console.log(`    Sorrow: ${face.sorrow}`);
      console.log(`    Surprise: ${face.surprise}`);
      //const dataReturn = (`Joy: ${face.joy}`, `Anger: ${face.anger}`, `Sorrow: ${face.sorrow}`, `Surprise: ${face.surprise}`);
    	//res.send('yeah it worked');
    });
  });
};