const express = require('express')
const { getHomepage, getTuan, getaaa } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage);

router.get('/tuan', getTuan)

router.get('/aaa', getaaa)
module.exports = router;