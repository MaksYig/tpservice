const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory
const imageDirPath = resolve(__dirname, '../public/img/flags/');
console.log(imageDirPath);
// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);
console.log(files);
// Loop through each file that was retrieved
files.forEach((file) =>

  rename(
    imageDirPath + `/${file}`,
    imageDirPath + `/${file.slice(4)}`,
    (err) => console.log(err)
  )
);


