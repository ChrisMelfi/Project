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


const newfileName = 'public/js/test1.png';

// Performs face detection on the remote file
/*
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





// Lists files in the bucket
return storage.bucket(bucketName).getFiles()
  .then((results) => {
    const files = results[0];

    console.log('Files:');
    files.forEach((file) => console.log(file.name));

    return files;
  });

*/

  // Uploads a local file to the bucket, e.g. "./local/path/to/file.txt"
  return storage.bucket(bucketName).upload(newfileName)
    .then((results) => {
      const file = results[0];

      console.log(`File ${file.name} uploaded.`);

      return file;
    });
// [END storage_upload_file]