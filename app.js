const express = require('express')
const app = express()
const port = 3000

app.use(express.static('docs'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/docs/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
