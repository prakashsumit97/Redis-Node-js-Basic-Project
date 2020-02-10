const express = require('express')
const router = new express.Router()
const task_controller = require('../controller/task.js')

router.get('/set',task_controller.get)
router.post('/set',task_controller.save)

router.get('/hmset',task_controller.hgetall)
router.post('/hmset',task_controller.hmset)

module.exports = router