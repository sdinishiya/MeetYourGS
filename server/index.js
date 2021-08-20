const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require('bcrypt');
const saltRounds = 10;


const app = express();
app.use(express.json());
app.use(cors());

//var req = require("./node_modules/req/node_modules/request");

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "",
	database: "meetyour_gs",
});

db.connect((err)=>{
    if(err) 
    {
        console.log(err);
    }
    else
    {
        console.log('Database Connected...');
    }
});

app.post('/sign-up', (req, res)=> {

	const fullname = req.body.fullname
	const address = req.body.address
	const nic = req.body.nic
	const telephone = req.body.telephone
	const email = req.body.email
	const password = req.body.password
 
	bcrypt.hash(password,saltRounds, (err,hash) => {

		if(err){
			console.log(err);
		}
	db.query
	("INSERT INTO signup (fullname, address, nic, telephone, email, password) VALUES (?,?,?,?,?,?)", 
	[fullname, address, nic, telephone, email, hash], 
	(err, result)=> {
		console.log(err);
	})	
	})
	
});

app.post('/login', (req, res) => {

	const email = req.body.email
	const password = req.body.password

	db.query
	("SELECT * signup WHERE email = ?;", 
	email, 
	(err, result)=> {

		if(err){
			res.send({err: err})
		}
			if (result.length > 0) {
				bcrypt.compare(password, result[0].password, (error, response)=>{
					if(response){
						res.send(result)
					}else{
						res.send({message:"Wrong username/password combination!"})
					}
				})
			}else{
				res.send({message:"User doesn't exist"});
			}
		}
	);
});

app.post('/schedule',(req,res)=>{
    console.log(req.body)
    const gsname = req.body.gsname;
    const date = req.body.date;
    const time = req.body.time;
    const description = req.body.description;

    db.query("INSERT INTO schedule (gsname,date,time,description) VALUES (?,?,?,?)",
    [gsname,date,time,description],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

app.get('/book',(req,res)=>{
    db.query("SELECT gsname,date,time,description FROM schedule",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});


app.post('/booking',(req,res)=>{
    console.log(req.body)
    const nic = req.body.nic;
    const name = req.body.name; 
    const home_no = req.body.home_no; 
    const address = req.body.address; 
    const phone = req.body.phone; 
    const email = req.body.email; 
    const des = req.body.des; 

    db.query("INSERT INTO bookings (nic,name,home_no,address,phone,email,des) VALUES (?,?,?,?,?,?,?)",
    [nic,name,home_no,address,phone,email,des],(err,result)=>{
		if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

app.get('/appview',(req,res)=>{
    db.query("SELECT bookID,nic,name,home_no,address,phone,email,des FROM bookings",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

app.get('/appconfirm',(req,res)=>{
    db.query("SELECT bookID,nic,name,home_no,address,phone,email,des FROM bookings WHERE status = '1' ",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

app.post('/donor',(req,res)=>{
    console.log(req.body)
    const donorName = req.body.donorName;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
	const date = req.body.date;
    const amount = req.body.amount;

    db.query("INSERT INTO donors (donorName,address,phone,email,date,amount) VALUES (?,?,?,?,?,?)",
    [donorName,address,phone,email,date,amount],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

app.get('/donationview',(req,res)=>{
    db.query("SELECT donorID,donorName,address,phone,email,date,amount FROM donors",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});



app.listen(3001, () => {
	console.log("running on port 3000");
});