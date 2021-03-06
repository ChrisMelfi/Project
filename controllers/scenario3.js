var vision = require('@google-cloud/vision');
const base64Img = require('base64-img');

const uploadedFile = 'public/media/temp/scenario3image.jpg';

// Authenticating

var visionClient = vision({
  projectId: 'final-project-156014',
  keyFilename: 'public/other/final-project-76fc6603c56a.json'
});

exports.upload = function(req, res) {


  // Saves base64 as image.jpg into public/media/temp
  const base64image = req.body.img;
  var filepath = base64Img.imgSync(base64image, 'public/media/temp/', 'scenario3image');

  // Detect faces and the locations of their features in an image.
  visionClient.detectFaces(uploadedFile)
    .then((results) => {
    const faces = results[0];

    console.log('Faces:');
    faces.forEach((face, i) => {
      var joyValue = `joy: ${face.joy}`;
      var angerValue = `anger: ${face.anger}`;
      var sorrowValue = `sorrow: ${face.sorrow}`;
      var surpriseValue = `suprise: ${face.surprise}`;
      console.log(`  Face #${i + 1}:`);
      console.log(joyValue, angerValue, sorrowValue, surpriseValue);
      if(joyValue.includes("true")) {
        res.json({'emojiResult':'<img class="img-circle" src="media/img/emojis/joy.svg", alt="Normal", width="100%">'});
      }
      else if(angerValue.includes("true")) {
        res.json({'emojiResult':'<img class="img-circle" src="media/img/emojis/anger.svg", alt="Normal", width="100%">'});
      }
      else if(sorrowValue.includes("true")) {
        res.json({'emojiResult':'<img class="img-circle" src="media/img/emojis/sorrow.svg", alt="Normal", width="100%">'});
      }
      else if(surpriseValue.includes("true")) {
        res.json({'emojiResult':'<img class="img-circle" src="media/img/emojis/surprise.svg", alt="Normal", width="100%">'});
      }
      else {
        res.json({'emojiResult':'<img class="img-circle" src="media/img/emojis/normal.svg", alt="Normal", width="100%">'});
      }
    });
  });
};


/*
// Imports the Google Cloud client libraries
const Storage = require('@google-cloud/storage');
const Vision = require('@google-cloud/vision');
const base64Img = require('base64-img');

// Instantiates clients
const storage = Storage();
const vision = Vision();
var visionClient = Vision({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

// Other stuff
const bucketName = 'facialanalysisbucket';
const uploadedFile = 'public/media/temp/image166.jpg';

exports.upload = function(req, res) {


  // Saves base64 as image.jpg into public/media/temp
  const base64image = req.body.img;
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
  visionClient.detectFaces(uploadedFile, function(err, faces) )
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
*/