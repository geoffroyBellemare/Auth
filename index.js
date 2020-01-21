const express = require('express')
const app = express()
const {
	PORT = 5000,
	SESS_NAME = 'sid',
	SESS_SECRET = 'sectretdgddggdgdjk',
	NODE_ENV = 'developement',
} = process.env

require('./routes/authRoutes.js')(app)

app.listen(PORT)
