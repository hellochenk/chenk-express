const express = require('express');
const router = express.Router();
const wikiController = require('../../controllers/wiki.controller')

// 主页路由
router.get('/', wikiController.index);

// “关于页面”路由
router.get('/about', wikiController.about);

module.exports = router;