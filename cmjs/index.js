// fs.readFile("./claves.txt", "utf-8", (err, text) =>
//   console.log("datos:", text)
// );
// let textSync = fs.readFileSync("./claves.txt", "utf-8");

// console.log(textSync);

const fs = require("node:fs/promises");
fs.readFile("./claves.txt", "utf-8")
  .then((text) => console.log(text))
  .catch((err) => console.log(err));

(async () => {
  try {
    const text = await fs.readFile("./claves.txt", "utf-8");
    console.log(text);
  } catch (error) {
    console.log(error);
  }
})();
