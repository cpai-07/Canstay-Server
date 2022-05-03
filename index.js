const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

require("./database/conn");

// const PORT = process.env.PORT;

const app = require("./app");






app.listen("8000", (req, res) => {
  console.log("Server alive at 8000");
});