const  express = require('express');
const app = express();
const expressLayouts = require("express-ejs-layouts");

const indexRouter = require('./router/authRoutes');
const PORT = process.env.PORT || 3000;
app.use( express.static( "./public" ) );


app.set("view engine", "ejs")
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

app.use(expressLayouts);
app.use(express.static('public'));

// data parsing
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/', indexRouter);
const ip =  "192.168.43.206"
app.listen(PORT , function() {
    //line to be removed later
    console.log("Server started on port 3000");
});

