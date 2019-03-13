let customerModel = require('../models/customer.model')
let express = require('express')
let router = express.Router();


// Create a new customer
// POST localhost:300/customer
router.post('/customer', (req, res) => {
  //req.body
  if (req.body) {
    return res.status(400).send('Request body is missing')
  }
  //let user = {
  //  name: "firstname lastname",
  //  email: 'email@gmail.com'
  //}

  let model = new customerModel(req.body);
  model.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(500).send(doc)
      }
      res.status(201);
    })
});
