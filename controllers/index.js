const authController = require("./auth.controller");
const userController = require('./user.controller');
const generalController = require("./general.controller");
const blogsController = require('./blogs.controller');
const likedPostController = require('./likedPost.controller');
const zodiacController = require("./zodiac.controller");
const tarotController = require("./tarot.controller");
const coffeeController = require("./coffee.controller");
const managerController = require("./manager.controller");
 
module.exports = {
  authController,
  userController,
  generalController,
  blogsController,
  likedPostController,
  zodiacController,
  coffeeController,
  managerController,
  tarotController
};