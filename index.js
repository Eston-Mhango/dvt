const express = require('express');
const {Pool}=require('pg')
const bodyParser=require('body-parser');
const path = require('path');

const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    database:'data_visualisation',
    password: 'tony',
    port:5432
});

pool.connect().then(()=>{
    console.log('connected to postgres database');
}).catch((err)=>{
    console.log('error connecting to database:', err);
})


const app = express();
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json);



app.get('/', async(req, res)=>{
    res.send('zikutheka')
    // res.render('index.ejs');
})


app.get('/patient_list', async(req, res)=>{
    res.render('patient_list');
})


app.get('/patient_data', async(req, res)=>{
    res.render('patient_data');
})
// app.get('/patient-data', async(req,res)=>{
//     try {
//         const{rows}=await pool.query('SELECT * from human_vitals LIMIT 10');
//         res.json(rows);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error:'internal server error'})
//     }
// })

app.listen(5000, ()=>console.log('server running on port 5000'));