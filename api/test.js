import { json } from 'body-parser'
import { Router } from 'express'

const router = Router()

router.use(json())

let testMessage = 'Hello, World!'

router.get('/api/test', (req, res) => {
  res.send(testMessage)
})

router.post('/api/test', (req, res) => {
  const { message } = req.body
  testMessage = message
  res.send({ message: 'Thanks!' })
})

export default router
