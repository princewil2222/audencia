const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

// app.get('/', (req, res) => {
//     // resp.sendFile(path.resolve(__dirname, './index.html'))
//     res.sendFile(path.join(__dirname, '/index.html'))
//      });

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})


app.use('/', router);
app.use('/static', express.static('static'))
const PORT = process.env.PORT||4000;
app.listen(PORT,() =>{
    console.log(`Server is running at port:${PORT}`);
})