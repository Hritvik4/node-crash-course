const fs = require("fs");

// read files

//fs.readFile("relativeFilePath", function)

fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log("last Line");

// write files
fs.writeFile("./docs/blog1.txt", "hello world", () => {
  console.log("file was written");
});

fs.writeFile("./docs/blog2.txt", "hello again", () => {
  console.log("file was written");
});

//directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log("err");
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder deleted");
  });
}

// fs.mkdir("./assets", (err) => {
//     console.log("Folder created");
//   });

// delete files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
