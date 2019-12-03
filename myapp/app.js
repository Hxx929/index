var cors = require('cors');
var QuanbuRouter = require()
var app =  express()

app.use(cors({
    origin:['http://localhost:8080'],
    methods:['GET','POAT'],
    allowedHeaders:['Conten-Type','Autorization']
}))