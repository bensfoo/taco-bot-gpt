import express from 'express'
import * as slackController from '../controllers/slack.controller'


const router = express.Router()

/* GET slack example */
router.get('/', slackController.initialiseClient)

/* POST RANDOM MESSAGE IN GENERAL */
router.get('/random', slackController.postSlackMessage)

export { router as default }
