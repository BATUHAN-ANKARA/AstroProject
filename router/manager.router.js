const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/postDaily", controller.managerController.postDaily);
router.post("/postWeekly", controller.managerController.postWeekly);
router.post("/postMonthly", controller.managerController.postMonthly);
router.put("/updateDaily", controller.managerController.updateDaily);
router.put("/updateWeekly", controller.managerController.updateWeekly);
router.put("/updateMonthly", controller.managerController.updateMonthly);

router.post("/addBlog", controller.managerController.addBlog);

router.post("/postRelationship", controller.managerController.postRelationship);

router.post("/postTarotDescription", controller.managerController.postTarotDescription);

module.exports = {
  manager: router
};
