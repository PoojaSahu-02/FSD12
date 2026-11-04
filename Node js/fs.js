const fs = require("node:fs");
// fs.writeFile("notes.txt", "hello this is notes file", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("data added successfully");
//   }
// });
// fs.readFile("notes.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });
// fs.appendFile("notes.txt", "updated data", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("data is updated");
//   }
// });
fs.unlink("notes.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file is delted");
  }
});
