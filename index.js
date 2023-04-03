const express=require('express');
const app=express();
const fs=require('fs')
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))


app.use('/login', (req, res, next) => {
    res.send(`
      <form onsubmit='localStorage.setItem("user", document.getElementById("user").value);' action="/message" method="POST">
        <label for="user">Username:</label>
        <input type="text" name="user" id="user">
        <button type="submit">LOGIN</button>
      </form>
    `);
  });




  app.post('/',(req,res,next)=>{
    


    fs.writeFile('f1.txt',`${req.body.username}:${req.body.message}\n`,{flag:'a'},(err)=>{
      if(err)
      {
        console.log('error')
      }
    })

    res.redirect('/message')
  })

  


    
    
    



 app.use("/message",(req,res,next)=>{
  fs.readFile('f1.txt','utf-8',(err,data)=>{
    if(err)
    {
      res.write('error')
    }
    else{
      

      
    
      res.send(`
      <form   onsubmit='document.getElementById("username").value=localStorage.getItem("user")' action="/" method="POST">
      <label for="message">Enter your message</label>
      <input type="text" name="message" id="message">
      <input type="hidden" id="username" name="username">
      <button type="submit">Send</button></form>
    <pre>  ${data}</pre>`)
          
    }
  })



    })
   
    







app.listen(80);







       
        

    

