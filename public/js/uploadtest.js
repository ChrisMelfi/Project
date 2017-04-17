function uploadFile (facialanalysisbucket, test1.png) {
  // Instantiates a client
  const storage = Storage();

  // References an existing bucket, e.g. "my-bucket"
  const bucket = storage.bucket('facialanalysisbucket');

  // Uploads a local file to the bucket, e.g. "./local/path/to/file.txt"
  return bucket.upload('test1.png')
    .then((results) => {
      const file = results[0];

      console.log(`File ${file.name} uploaded.`);

      return file;
    });
}