const express = require('express');
const companyRoutes = express.Router();

// Require Company model in our routes module
let Company = require('./company.model');

// Defined store route
companyRoutes.route('/add').post(function (req, res) {
  let company = new Company(req.body);
  company.save()
    .then(company => {
      res.status(200).json({'company': 'company in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
companyRoutes.route('/').get(function (req, res) {
    Company.find(function(err, company){
    if(err){
      console.log(err);
    }
    else {
      res.json(company);
    }
  });
});

// Defined edit route
companyRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Company.findById(id, function (err, company){
      res.json(company);
  });
});

//  Defined update route
companyRoutes.route('/update/:id').post(function (req, res) {
    Company.findById(req.params.id, function(err, company) {
    if (!company)
      res.status(404).send("data is not found");
    else {
        company.person_name = req.body.person_name;
        company.company_name = req.body.company_name;
        company.company_id_number = req.body.company_id_number;

        company.save().then(company => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
companyRoutes.route('/delete/:id').get(function (req, res) {
    Company.findByIdAndRemove({_id: req.params.id}, function(err, company){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = companyRoutes;