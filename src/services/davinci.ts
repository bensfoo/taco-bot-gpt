import { Configuration, OpenAIApi } from 'openai'
import { COMPLETION_MODEL, ICEBREAKER_PROMPT, MAX_TOKENS } from '../constants/prompt'

export const getRandomPropmpt = async () => {
  const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    })
  const openai = new OpenAIApi(configuration)
    
  const completion = await openai.createCompletion({
      model: COMPLETION_MODEL,
      prompt: ICEBREAKER_PROMPT,
      max_tokens: MAX_TOKENS
    })
  return completion.data.choices[0].text
}