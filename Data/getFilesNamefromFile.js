const fs = require('fs');
const path = __dirname + `/../public/img/flags`;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


// let str = fs.readdirSync(path).join('\n');
// console.log(str);
// // fs.writeFile(filename, str, function (err) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log('File written!');
// //   }
// // });
fs.readdirSync(path).forEach((file) => {
  console.log(file);
  fs.writeFile(
    './test.txt',
    `${file.split('.')[0].charAt(0).toUpperCase() + file.slice(1)}\n`,
    { flag: 'as' },
    function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('File written!');
      }
    }
  );
});

