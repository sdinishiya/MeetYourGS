const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require('bcrypt');
const saltRounds = 10;



const app = express();

app.use(express.json());
app.use(cors());

//var req = require("./node_modules/req/node_modules/request");

app.use(express.json());

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "root",
	database: "meetyourgs",
	port: "3306"
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

app.listen(3001, () => {
	console.log("running on port 3000");
});