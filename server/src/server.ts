import express from 'express'

const app = express()

app.get('/users', (req, res) => {
  res.json([
    'Da',
    'De',
    'Di'
  ])
})

app.listen(3333)