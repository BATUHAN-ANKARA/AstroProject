const userService = require("./user.service");
const generalService = require('./general.service');
const blogsService = require('./blogs.service');
const likedPostService = require('./likedPost.service');
const zodiacService = require("./zodiac.service");
const managerService = require("./manager.service");
const coffeeService = require("./coffee.service");
const tarotService = require("./tarot.service");
 
module.exports = {
  user: userService,
  general: generalService,
  blogs: blogsService,
  likedPost: likedPostService,
  zodiac: zodiacService,
  manager: managerService,
  coffee: coffeeService,
  tarot: tarotService,
};