import { WebClient } from '@slack/web-api'
import { Request, Response } from 'express'
import logger from '../common/logger'
import { getRandomPropmpt } from '../services/davinci'

export const initialiseClient = async (req: Request, res: Response) => {
  res.status(200).send('')
}

export const postSlackMessage = async (req: Request, res: Response) => {
  const token = process.env.SLACK_TOKEN
  const web = new WebClient(token)

  try {
    const completionText = await getRandomPropmpt()
    web.chat.postMessage({
        channel: '#general', // Replace with the channel name or ID
        text: completionText
    }) 
    res.status(200).send('')
    logger.info('success')
  } catch (e: any) {
    logger.error(e.message)
    res.status(500).send(e.message)
  }
}

