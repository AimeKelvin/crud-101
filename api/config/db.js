import mysql from "mysql2"

const conn =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"notesdb"
})

conn.connect((err)=>{
    if(err){
        console.log("Database connection failed:", err)
    }else{
        console.log("Connected to the database.")
    }
})

export default conn