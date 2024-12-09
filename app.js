const express=require('express');
const mongoose=require('mongoose');
const app=express();
const travelRouter=require('./Routers/travelRouter');
app.use(express.json());


main()
.then(()=>console.log("database connected"))
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb+srv://suhanapks:c7ekfyW8s0LnQgSJ@cluster0.x3pn7.mongodb.net/TravelDB');
}

app.get('/',(req,res)=>{
    res.send("welcome to travel plan database,to get plan please go to localhost:3001/travel")
})

app.use('/plans',travelRouter);


app.listen(3001,()=>{
    console.log("Server started on port 3001")
})