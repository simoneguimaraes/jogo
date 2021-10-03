const User = require("./controller/user");
const options = require("./data");

let jogar = new User({opt: options}).game();
jogar