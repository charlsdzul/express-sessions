//CREACIÓN DE RUTAS CON EXPRESS
const { Router } = require("express");
const router = Router();

//router.get("/", (req, res) => res.send("Hello world")); //Cuando visiten sitio main
router.get("/", (req, res) => {
  res.render("index"); //index.ejs
});

router.post("/register", (req, res) => {
  //req tiene los datos enviados por POST desde el formulario
  console.log(req.body);
  //req.session.my_variable = "Carlos Dzul";
  //req.session.user_data = req.body;
  /**
   * FLASH envia tódo a la session sin tener que estar declarando
   * es más rápido de escribir
   */
  req.flash("user", req.body);
  res.redirect("/profile");
  //res.send("INFORMACIÓN RECIBIDA");
});

router.get("/profile", (req, res) => {
  //console.log(req.session.user_data);
  // const user_data = req.session.user_data;
  const user = req.flash("user")[0];
  console.log(user);
  //delete req.session.my_variable; //opcional eliminarlo
  res.render("profile", {
    user
  });
});

module.exports = router;
