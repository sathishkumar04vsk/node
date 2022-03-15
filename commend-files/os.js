// const os = require("os");
// console.log("Total memory in GB: ", os.totalmem() / 1024 / 1024 / 1024);
// console.log("free memory in GB: ", os.freemem() / 1024 / 1024 / 1024);
// console.log("Oprating System: ", os.version());
// console.log("CPU", os.cpus());
const fs = require("fs");

fs.readFile("./cool.txt", "utf-8", (err, content) => {
  if (err) {
    console.log(err);
  }
  console.log(content);
});
const niceQuote = "\nMake everyday a little less ordinarly";

fs.appendFile("./nice.txt", niceQuote, (err) => {
  console.log("Updated sucessfully");
});

fs.unlink("./delete-file.css", (err) => {
  console.log("Delete files");
});

fs.readdir("./backup", (err) => {
  console.log("files");
});

fs.readdir("./backup", (err, files) => {
  // console.log(files);
  files.forEach((fileName) =>
    fs.unlink(`./backup/${fileName}`, (err) => {
      console.log("Deleted file!!! ✨");
    })
  );
});
