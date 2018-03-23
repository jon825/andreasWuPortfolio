const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Admin } = require("../models");
const bodyParser = require("body-parser");

let attributes;

Admin.where({})
  .fetch()
  .then(admin => {
    attributes = Object.keys(admin.attributes);
  });

router.get("/", (req, res) => {
  const where = {};
  for (let key in req.query) {
    if (attributes.includes(key)) {
      where[key] = req.query[key];
    }
  }
  Admin.where(where)
    .fetchAll({})
    .then(admin => {
      res.send(admin);
    })
    .catch(e => {
      res.status(500).send(e);
    });
});

router.post("/encrypt", (req, res) => {
  const admin = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(admin.password, salt, (err, hash) => {
      const newAdmin = new Admin({
        username: admin.username,
        password: hash
      });
      newAdmin.save().then(admin => {
        console.log(admin);
      });
    });
  });
});

router.post("/login", (req, res) => {
  let admin = req.body;
  Admin.where({ username: admin.username })
    .fetch()
    .then(data => {
      bcrypt.compare(
        admin.password,
        data.attributes.password,
        (err, result) => {
          if (result == true) {
            let token = jwt.sign({ username: admin.username }, "andreaswukey");
            res.json({ token: token });
            console.log('token =', token);
          } else {
              res
              .status(403)
              .send({token:null});
              }
            })
        })
    .catch(e => {
      console.log(e);
      res.status(500).send(e);
    });
});


module.exports = router;
