#!/usr/bin/env node

const express = require('express')

const app = express()

app.use('/scripts', express.static(__dirname + '/node_modules/paper/dist/'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/icons', express.static(__dirname + '/public/icons'));

app.set('view engine', 'ejs')

app.get('/', (req, res) =>
    res.render('index')
)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
