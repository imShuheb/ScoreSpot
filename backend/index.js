const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser');

connectToMongo();

const app = express()
const port = 5000


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors())
app.use(express.json())

const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use('/api/auth', require('./routes/auth'))
app.use('/api', require('./routes/profile'))
app.use('/teams', require('./routes/team'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})