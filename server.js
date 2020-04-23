var express=require('express');
var app=express();
var mongoose=require('mongoose');


// app.use(express.json());

var route=require('./api/router/index')


//const file = require('./routes/file');
// app.use('/uploads', express.static('uploads'));
// app.use('/api/fileUpload', file);


//var upload=multer({dest:'uploads/'})
app.set("view engine", "ejs");
app.set("views", __dirname + "/view");

const port=process.env.PORT || 3000
app.listen(port,()=>{
console.log("Server Started on Port:"+port);
})


//configure body parser
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));



app.use('/api',route);

mongoose.connect('mongodb://localhost:27017/Populate',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},console.log("MongoDB Connected"));