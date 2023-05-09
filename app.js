const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const comment = require('./models/Comment');
dotenv.config({ path: '/env/.env' })


const app = express();
app.use(express.json());
// app.use(bodyParser);


app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/client/login.html');
});

app.post('/submit', (req, res) => {
    //write mongo logic
    // const data = req.body.comment;
    // commment.create({text: data});
    // console.log(req.body);
    res.json({ success: true, message: 'Comment submitted successfully' });
    // res.sendFile(__dirname + '/client/index.html');
});

app.get('/discussions', (req, res) => {
    res.sendFile(__dirname + '/client/discussions.html');
});


app.listen(3000, async () => {
    
    //connecting the server to the database
    try {
        await mongoose.connect('mongodb+srv://VOID:booknook@booknook.ccswqnz.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(err.message);
    };
    console.log("Hello server");
});



