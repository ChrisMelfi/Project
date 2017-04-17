// Imports the Google Cloud client libraries
const Storage = require('@google-cloud/storage');
const Vision = require('@google-cloud/vision');

// Instantiates clients
const storage = Storage();
const vision = Vision();

// The name of the bucket where the file resides, e.g. "my-bucket"
const bucketName = 'facialanalysisbucket';

// The path to the file within the bucket, e.g. "path/to/image.png"
const fileName = 'test-image.png';

// Performs face detection on the remote file
vision.detectFaces(storage.bucket(bucketName).file(fileName))
  .then((results) => {
    const faces = results[0];

    console.log('Faces:');
    faces.forEach((face, i) => {
      console.log(`  Face #${i + 1}:`);
      console.log(`    Joy: ${face.joy}`);
      console.log(`    Anger: ${face.anger}`);
      console.log(`    Sorrow: ${face.sorrow}`);
      console.log(`    Surprise: ${face.surprise}`);
    });
  });