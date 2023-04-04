const express=require('express');
const app=express();
const fs=require('fs')
const path=require('path');
app.use(express.static(path.join(__dirname,'public')));
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'views')))

app.use('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname,'views','login.html'));
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

  


    
    
    



 app.use("/message",(req,res)=>{
fs.readFile('C:/Users/sanja/OneDrive/Desktop/tasks/views/message.html','utf-8',(err,message)=>{
if(err)
{
  console.log('errot')
}
else{
  fs.readFile('f1.txt','utf-8',(err,data)=>{
    if(err)
    {
      console.log('error')
    }

    else{
      const com=message+'\n'+data+'\n';
      res.send(com);
    }
  })
}
})
  })



    


app.use((req,res,next)=>{
  res.sendFile(path.join(__dirname,'views','error.html'));
})

app.post('/success', (req, res, next) => {
  const filePath = path.join(__dirname, 'views', 'success.html');
  
    res.sendFile(filePath);
  
});


app.listen(80);







       
        

    

