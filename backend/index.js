const express = require ("express") ;
const cors = require("cors");
const app = express () ;

var corsOptions={
    origin: "http://localhost:8100"
}
app.use(cors(corsOptions));
// parse requests of content - type application / json
app.use (express.json()) ;
// parse requests of content - type
app.use (express.urlencoded ({extended : true})) ;

const db = require("./models");
db.sequelize.sync();


// db.Sequelize.sync({ force: true }).then(()=>{
// console.log("Drop and re-sync db.")
// });

// simple route
app.get ("/",(req, res) => {
  res.json({message:"Welcome to bicycles application."}) ;
} ) ;


require ("./routes/bicycle.routes")(app) ;

// set port , listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT , () => {
    console.log (`Server is running on port ${PORT}.`);
});
