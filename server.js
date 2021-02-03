const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.static('public'))


connectDB() 
app.set('views', path.join(__dirname, '/views'))
app.use(express.json())
app.set('view engine', 'ejs')







app.get('/',(req, res)=>{
    res.render('home');
})

app.use('/api/files', require('./routes/files'));
app.use('/files',require('./routes/show')); 
app.use('files/download', require('./routes/download'))

app.listen(PORT,()=>{
    console.log('listening on port')
})