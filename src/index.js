const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Middleware: procesan antes de ellegar a las rutas
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //Entiende datos llegados desde el formulario
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "mysecretkey_charls"
  })
);
app.use(flash());
//routes
app.use(require("./routes/index"));

app.listen(3000);
console.log("SERVER http://localhost:3000");
