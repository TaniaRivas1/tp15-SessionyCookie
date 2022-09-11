
const { validationResult } = require("express-validator");


module.exports = {
    index: (req, res) => {
    res.render("form");
  },
  processForm: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      req.session.usuario = { ...req.body };
      if (req.body.remember) {
        const TIME_IN_MILISECONDS = 80000;
        res.cookie("cookie", req.session.usuario.color, {
          expires: new Date(Date.now() + TIME_IN_MILISECONDS),
          httpOnly: true,
          secure: true,
        });
      }

      res.render("form", {
        session: req.session,
      });
    } else {
      res.render("form", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },
  confirm: (req, res) => {
    res.render("confirm", {
      session: req.session,
    });
  },
  forget: (req, res) => { 
    req.session.destroy();
    res.cookie("cookie", null, { maxAge: -1 });
    res.redirect("/");},
};
