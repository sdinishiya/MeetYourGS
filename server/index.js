const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require('bcrypt');

// const { response } = require('express');
// const path = require('path');
// const { name } = require('ejs');
const bodyParser =  require('body-parser')
// const ejs = require ('ejs');
// const socketio = require('socket.io')
// app.use(express.json());
// app.use(cors());
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
// constsmaterial
app.post('/create',(req,res)=>{
    console.log(req.body)
    const addeddate = req.body.addeddate;
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;
    const quantity = req.body.quantity;

    db.query("INSERT INTO constsmaterial (addeddate,materialid,materialname,quantity) VALUES (?,?,?,?)",
    [addeddate,materialid,materialname,quantity],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

app.get('/materials',(req,res)=>{
    db.query("SELECT * FROM constsmaterial",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;
    const sqlDelete="DELETE FROM constsmaterial WHERE id=?";

    db.query(sqlDelete,id,(err,result)=>{
      if(err) console.log(err);
    });
  });

  app.put("/update/:id",(req,res)=>{
    const id = req.params.id;
    const name = req.params.name;
    const sqlUpdate="UPDATE constsmaterial SET name=? WHERE id=?";
  
    db.query(sqlUpdate,[name,id],(err,result)=>{
      if(err) console.log(err);
    })
  });
  
  app.put('/updateMaterial/:id', (req,res) => {
    console.log(id);
    //const id = req.body.id;
    const name = req.body.name;
    const sqlUpdate = "UPDATE SET constsmaterial name=? WHERE id=?";
  
    db.query(sqlUpdate,[name,id],(err,result)=>{
      if(err) console.log(err);
    })
  });


// agrimaterial
app.post('/agri',(req,res)=>{
    console.log(req.body)
    const addeddate = req.body.addeddate;
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;
    const quantity = req.body.quantity;

    db.query("INSERT INTO agrimaterial (addeddate,materialid,materialname,quantity) VALUES (?,?,?,?)",
    [addeddate,materialid,materialname,quantity],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

app.get('/agrimaterials',(req,res)=>{
    db.query("SELECT * FROM agrimaterial",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});










// othermaterial
app.post('/other',(req,res)=>{
    console.log(req.body)
    const addeddate = req.body.addeddate;
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;
    const quantity = req.body.quantity;

    db.query("INSERT INTO othermaterial (addeddate,materialid,materialname,quantity) VALUES (?,?,?,?)",
    [addeddate,materialid,materialname,quantity],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

app.get('/othermaterials',(req,res)=>{
    db.query("SELECT * FROM othermaterial",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

// income

app.post('/financecreate',(req,res)=>{
    console.log(req.body)
    const date = req.body.date;
    const receiptno = req.body.receiptno;
    const description = req.body.description;
    const income = req.body.income;
   
    db.query("INSERT INTO finance (date,receiptno,description,income) VALUES (?,?,?,?)",
    [date,receiptno,description,income],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

app.get('/transaction',(req,res)=>{
    db.query("SELECT * FROM finance",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

// expense

app.post('/expensecreate',(req,res)=>{
    console.log(req.body)
    const date = req.body.date;
    const receiptno = req.body.receiptno;
    const description = req.body.description;
    const expense = req.body.expense;
   
    db.query("INSERT INTO finance (date,receiptno,description,expense) VALUES (?,?,?,?)",
    [date,receiptno,description,expense],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

// fund

app.post('/fundcreate',(req,res)=>{
    console.log(req.body)
    const date = req.body.date;
    const fundID = req.body.fundID;
    const description = req.body.description;
    const debit = req.body.debit;
   
    db.query("INSERT INTO fund (date,fundID,description,debit) VALUES (?,?,?,?)",
    [date,fundID,description,debit],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

app.get('/funds',(req,res)=>{
    db.query("SELECT * FROM fund",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

// Fund Allocation

app.post('/fundallocatecreate',(req,res)=>{
    console.log(req.body)
    const date = req.body.date;
    const fundID = req.body.fundID;
    const description = req.body.description;
    const credit = req.body.credit;
   
    db.query("INSERT INTO fund (date,fundID,description,credit) VALUES (?,?,?,?)",
    [date,fundID,description,credit],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

//appointment
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
    const bookID = req.body.bookID;
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

app.get('/appschedule',(req,res)=>{
    db.query("SELECT bookID,nic,name,home_no,address,phone,email,des,status FROM bookings ",(err,result,) => {
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



//donations
app.post('/donor',(req,res)=>{
    console.log(req.body)
    const donorName = req.body.donorName;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
	const date = req.body.date;
    const amount = req.body.amount;

    db.query("INSERT INTO donation (donorName,address,phone,email,date,amount) VALUES (?,?,?,?,?,?)",
    [donorName,address,phone,email,date,amount],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

app.get('/donationview',(req,res)=>{
    db.query("SELECT donorID,donorName,address,phone,email,date,amount FROM donation",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

app.get("/donationdetails",(req,res)=>{
    donorID=req.params.donorID;
    db.query("SELECT donorName,address,phone,email,date,amount FROM donation WHERE donorID=?",[req.query.donorID],(err,result)=>{
        console.log(req.query.donorID);
        res.send(result);
    });
        
});

app.put('/EditDonations', (req,res) => {
    const donorID = req.body.donorID;
    const donorName = req.body.donorName;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
    const amount = req.body.amount;

    //console.log(req.body)

    db.query("UPDATE donation SET donorName=?,address=?, phone=?,email=?,amount=? WHERE donorID = ?; ", 
    [donorName,address,phone,email,amount, donorID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });


//notice
app.post('/addnotice',(req,res)=>{
    console.log(req.body)
    const noticeID = req.body.noticeID;
    const topic = req.body.topic;
    const description = req.body.description; 
    const uploadDate = req.body.uploadDate;
    const expDate = req.body.expDate; 
    const active_status = req.body.active_status;  

    db.query("INSERT INTO notice (topic,description,uploadDate,expDate,active_status) VALUES (?,?,?,?,?)",
    [topic,description,uploadDate,expDate,active_status],(err,result)=>{
		if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

app.get('/noticeview',(req,res)=>{
    db.query("SELECT topic,description,uploadDate,expDate,active_status FROM notice",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});



app.listen(3001, () => {
	console.log("running on port 3001");
});