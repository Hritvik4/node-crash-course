const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//     console.log("------New chunk------");
//     console.log(chunk);
//     writeStream.write('\n NEW CHUNK \n')
//     writeStream.write(chunk);
// });

//piping - straightaway put text from readable to writable stream

readStream.pipe(writeStream);
