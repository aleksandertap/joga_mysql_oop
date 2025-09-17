const express = require("express");
const router = express.Router();

const articleControllerClass = require("../../controllers/admin/article");
const articleController = new articleControllerClass();

// GET /admin - get all articles for admin view
router.get("/", (req, res) => {
  articleController.getAdminArticles(req, res);
});

// GET /admin/create - get form to create new article
router.get("/article/create", (req, res) => {
  articleController.getCreateNewArticle(req, res);
});

// POST / - create new article
router.post("/article/create", (req, res) => {
  articleController.createNewArticle(req, res);
});

// GET /admin/edit/:id - get form to edit an article
router.get("/edit/:id", (req, res) => {
  articleController.getEditArticle(req, res);
});

router.post("/article/edit/:id", (req, res) => {
  articleController.updateArticle(req, res);
});

router.post("/article/delete/:id", (req, res) => {
  articleController.deleteArticle(req, res);
});

module.exports = router;
