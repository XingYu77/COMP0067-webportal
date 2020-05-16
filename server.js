const express = require('express');
const app = express();
const cors = require('cors');

var mysql = require('mysql');
var bodyParser = require('body-Parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

const SELECT_ALL_MODULES = 'SELECT * FROM modules'

const con = mysql.createConnection(
    {
        host:'localhost',
        port:'8888',
        user:'root',
        database:'webPortalDB'
    }
);

var server = app.listen(4546, function(){
    var host = server.address().address
    var port = server.address().port
});

con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");

});

app.use(cors());

app.get('/',(req,res) => {
    res.send('go to')
});

app.get('/modules/update',(req,res) =>{
    const{ModuleCode,ModuleName,StartDate,EndDate,Weeks} = req.query;
    const UPDATE_MODULES = `UPDATE modules SET ModuleCode ='${ModuleCode}',ModuleName ='${ModuleName}',StartDate = '${StartDate}',EndDate ='${EndDate}',Weeks =${Weeks} WHERE (ModuleCode = '${ModuleCode}')`;
    con.query(UPDATE_MODULES,(err,results) =>{
        if(err){
            return res.send(err)
        }
        else {
            return res.send('updated successfully')
        }
    });
});

app.get('/modules/add',(req,res) =>{
    const{ModuleCode,ModuleName,StartDate,EndDate,Weeks} = req.query;
    const INSERT_MODULES = `INSERT INTO modules (ModuleCode,ModuleName,StartDate,EndDate,Weeks) VALUES ('${ModuleCode}','${ModuleName}','${StartDate}','${EndDate}',${Weeks})`;
    con.query(INSERT_MODULES,(err,results) =>{
        if(err){
            return res.send(err)
        }
        else {
            return res.send('added successfully')
        }
    });
});

app.get('/modules/delete',(req,res) =>{
    const{ModuleCode} = req.query;
    const DELETE_MODULES = `DELETE FROM modules WHERE (ModuleCode = '${ModuleCode}');`;
    con.query(DELETE_MODULES,(err,results) =>{
        if(err){
            return res.send(err)
        }
        else {
            return res.send('deleted successfully')
        }
    });
});

app.get('/modules',(req,res)=>{
    con.query(SELECT_ALL_MODULES,(err,rows,results)=>{
        if(err){
          return res.send(err)
        }
        else{
            console.log(rows);
            return res.send(rows)
            }
        
        

    });
})